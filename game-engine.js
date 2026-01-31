/**
 * Life Planning Challenge - Game Engine
 *
 * Branching logic, consequence generation, and reflection prompts.
 * Works with game-data.js to create personalized gameplay.
 */

const GameEngine = {
    // Current game state with multi-dimensional tracking
    state: {
        lifeStage: null,
        economicClass: "middle",
        relationshipPath: "single",
        parenthoodPath: "childfree",
        advantageScore: 0,
        choices: {},           // All choices made: { moduleId: { questionId: choiceId } }
        consequences: [],      // Consequences revealed
        reflections: []        // Player reflections entered
    },

    /**
     * Initialize game engine with saved state or fresh start
     */
    init: function(savedState) {
        if (savedState) {
            this.state = { ...this.state, ...savedState };
        }
        console.log("GameEngine initialized with state:", this.state);
    },

    /**
     * Get available choices for a module/question based on current state
     * Implements multi-dimensional branching
     */
    getAvailableChoices: function(moduleId, questionId) {
        const module = GAME_DATA.modules[moduleId];
        if (!module) {
            console.error("Module not found:", moduleId);
            return [];
        }

        // Find the appropriate choice set
        let choiceKey = `m${moduleId}_${questionId}`;

        // If module branches by life stage, append life stage to key
        if (module.branchesByLifeStage && this.state.lifeStage) {
            choiceKey = `m${moduleId}_${questionId}_${this.state.lifeStage}`;
        }

        const choiceSet = GAME_DATA.choices[choiceKey];
        if (!choiceSet) {
            // Try without life stage suffix
            const fallbackKey = `m${moduleId}_${questionId}`;
            const fallbackSet = GAME_DATA.choices[fallbackKey];
            if (fallbackSet) {
                return this.filterChoicesByState(fallbackSet);
            }
            console.warn("Choice set not found:", choiceKey);
            return [];
        }

        return this.filterChoicesByState(choiceSet);
    },

    /**
     * Filter choices based on accumulated state
     * Some choices may be unavailable based on previous decisions
     */
    filterChoicesByState: function(options) {
        const availableChoices = [];

        for (const [key, choice] of Object.entries(options)) {
            // Check if choice has requirements
            if (choice.requires) {
                let meetsRequirements = true;
                for (const [reqKey, reqValue] of Object.entries(choice.requires)) {
                    if (this.state[reqKey] !== reqValue) {
                        meetsRequirements = false;
                        break;
                    }
                }
                if (!meetsRequirements) continue;
            }

            // Check if choice is excluded by previous choices
            if (choice.excludedBy) {
                let excluded = false;
                for (const exclusion of choice.excludedBy) {
                    const [module, question, value] = exclusion.split(".");
                    if (this.state.choices[module]?.[question] === value) {
                        excluded = true;
                        break;
                    }
                }
                if (excluded) continue;
            }

            availableChoices.push({ key, ...choice });
        }

        return availableChoices;
    },

    /**
     * Record a choice and apply state changes
     */
    makeChoice: function(moduleId, questionId, choiceKey) {
        // Find the choice
        let choiceSetKey = `m${moduleId}_${questionId}`;
        const module = GAME_DATA.modules[moduleId];

        if (module?.branchesByLifeStage && this.state.lifeStage) {
            choiceSetKey = `m${moduleId}_${questionId}_${this.state.lifeStage}`;
        }

        let choiceSet = GAME_DATA.choices[choiceSetKey];
        if (!choiceSet) {
            choiceSet = GAME_DATA.choices[`m${moduleId}_${questionId}`];
        }

        if (!choiceSet || !choiceSet[choiceKey]) {
            console.error("Choice not found:", moduleId, questionId, choiceKey);
            return null;
        }

        const choice = choiceSet[choiceKey];

        // Store choice
        if (!this.state.choices[moduleId]) {
            this.state.choices[moduleId] = {};
        }
        this.state.choices[moduleId][questionId] = choiceKey;

        // Apply state changes
        if (choice.stateChanges) {
            for (const [key, value] of Object.entries(choice.stateChanges)) {
                if (key === "advantageScore") {
                    this.state.advantageScore += value;
                } else {
                    this.state[key] = value;
                }
            }
        }

        // Generate and return consequence
        return this.generateConsequence(choice, moduleId, questionId);
    },

    /**
     * Generate personalized consequence based on choice and state
     */
    generateConsequence: function(choice, moduleId, questionId) {
        const consequence = {
            choiceId: choice.id,
            label: choice.label,
            brief: choice.brief,
            immediate: choice.consequence?.immediate || "",
            sociologicalLink: choice.consequence?.sociologicalLink || null,
            futureImpacts: choice.consequence?.futureImpacts || [],
            personalizedAdditions: []
        };

        // Add personalized narrative based on accumulated state
        const connectionKey = `m${moduleId - 1}_to_m${moduleId}`;
        const connections = GAME_DATA.connections[connectionKey];

        if (connections) {
            // Check for relevant connections based on state
            for (const [condition, effect] of Object.entries(connections)) {
                const [stateKey, stateValue] = condition.split(".");
                if (this.state[stateKey] === stateValue ||
                    this.state.choices[moduleId - 1]?.[stateKey] === stateValue) {

                    if (effect.addConsequence) {
                        consequence.personalizedAdditions.push(effect.addConsequence);
                    }
                    if (effect.narrativeNote) {
                        consequence.personalizedAdditions.push(effect.narrativeNote);
                    }
                    if (effect.modifyAdvantagScore) {
                        this.state.advantageScore += effect.modifyAdvantagScore;
                    }
                }
            }
        }

        // Store consequence
        this.state.consequences.push({
            moduleId,
            questionId,
            consequence,
            timestamp: new Date().toISOString()
        });

        return consequence;
    },

    /**
     * Generate reflection prompt connecting current choice to previous decisions
     */
    generateReflectionPrompt: function(moduleId) {
        const prompts = [];
        const currentChoices = this.state.choices[moduleId] || {};

        // Connect to Module 1 foundation
        if (moduleId > 1 && this.state.choices[1]) {
            const familyBackground = this.state.choices[1].familyStructure;
            const coreValue = this.state.choices[1].coreValue;

            prompts.push({
                type: "foundation",
                prompt: `How does your Module 1 choice (${this.formatValue(coreValue)} value, ${this.formatValue(familyBackground)} background) shape how you approach this decision?`
            });
        }

        // Connect to most recent relevant decision
        if (moduleId > 2) {
            const prevModule = moduleId - 1;
            const prevChoices = this.state.choices[prevModule];
            if (prevChoices) {
                const prevChoiceKeys = Object.keys(prevChoices);
                if (prevChoiceKeys.length > 0) {
                    prompts.push({
                        type: "cascade",
                        prompt: `Your Module ${prevModule} decisions created constraints. How did those earlier choices affect what feels possible now?`
                    });
                }
            }
        }

        // Add sociology concept prompt
        const currentConsequences = this.state.consequences.filter(c => c.moduleId === moduleId);
        const sociologyLinks = currentConsequences
            .map(c => c.consequence.sociologicalLink)
            .filter(Boolean);

        if (sociologyLinks.length > 0) {
            const concepts = sociologyLinks.map(l => l.concept).join(", ");
            prompts.push({
                type: "sociology",
                prompt: `This decision connects to sociological concepts: ${concepts}. How does understanding these concepts change how you see your "choice"?`
            });
        }

        // Add advantage/disadvantage tracking prompt
        if (this.state.advantageScore !== 0) {
            const direction = this.state.advantageScore > 0 ? "advantage" : "disadvantage";
            prompts.push({
                type: "cumulative",
                prompt: `Your cumulative ${direction} score is ${Math.abs(this.state.advantageScore)}. How have early advantages/disadvantages compounded across modules?`
            });
        }

        return prompts;
    },

    /**
     * Get personalized module introduction based on state
     */
    getModuleIntro: function(moduleId) {
        const module = GAME_DATA.modules[moduleId];
        if (!module) return null;

        const intro = {
            title: module.title,
            description: module.description,
            hammondRef: module.hammondRef,
            estimatedTime: module.estimatedTime,
            personalizedContext: []
        };

        // Add life stage specific context
        if (this.state.lifeStage) {
            const stageLabels = GAME_DATA.dimensions.lifeStage.labels;
            intro.personalizedContext.push(
                `As a ${stageLabels[this.state.lifeStage]}, this module addresses decisions relevant to your life stage.`
            );
        }

        // Add advantage score context
        if (this.state.advantageScore > 2) {
            intro.personalizedContext.push(
                "Your accumulated advantages give you more options in this module."
            );
        } else if (this.state.advantageScore < -2) {
            intro.personalizedContext.push(
                "Your accumulated disadvantages may constrain some options in this module."
            );
        }

        // Add previous choice context
        if (moduleId > 1) {
            const relevantConnection = GAME_DATA.connections[`m${moduleId - 1}_to_m${moduleId}`];
            if (relevantConnection) {
                intro.personalizedContext.push(
                    "Your previous choices have created path dependencies that affect this module."
                );
            }
        }

        return intro;
    },

    /**
     * Generate final synthesis analysis
     */
    generateSynthesisAnalysis: function() {
        const analysis = {
            lifeStage: this.state.lifeStage,
            totalAdvantageScore: this.state.advantageScore,
            pathDependencies: [],
            sociologicalInsights: [],
            policyImplications: []
        };

        // Identify key path dependencies
        const module1Choices = this.state.choices[1] || {};
        const module2Choices = this.state.choices[2] || {};

        if (module1Choices.familyStructure === "nuclear_traditional" &&
            module2Choices.educationPath === "bachelor") {
            analysis.pathDependencies.push({
                pattern: "Cumulative Advantage",
                description: "Starting with nuclear family stability → bachelor's degree → professional career shows how advantages compound."
            });
        }

        if (module1Choices.familyStructure === "single_parent" &&
            module2Choices.educationPath === "workforce") {
            analysis.pathDependencies.push({
                pattern: "Cumulative Disadvantage",
                description: "Single-parent background → immediate workforce entry shows how early constraints limit later options."
            });
        }

        // Collect all sociological concepts encountered
        const allConcepts = new Set();
        for (const consequence of this.state.consequences) {
            if (consequence.consequence.sociologicalLink) {
                allConcepts.add(consequence.consequence.sociologicalLink.concept);
            }
        }
        analysis.sociologicalInsights = Array.from(allConcepts).map(concept => {
            const conceptData = GAME_DATA.concepts[concept];
            return conceptData ? {
                concept: conceptData.term,
                definition: conceptData.definition,
                hammondRef: conceptData.hammondRef
            } : { concept };
        });

        // Generate policy implications based on choices
        if (this.state.advantageScore < 0) {
            analysis.policyImplications.push(
                "Your journey shows how structural barriers (not individual choices) create disadvantage. Policy supports could have changed outcomes."
            );
        }

        const policyStance = this.state.choices[8]?.policyStance;
        if (policyStance) {
            const policyChoice = GAME_DATA.choices.m8_policy?.[policyStance];
            if (policyChoice) {
                analysis.policyImplications.push(
                    `Your policy stance (${policyChoice.label}) reflects how your game experience shaped your understanding of structural vs individual responsibility.`
                );
            }
        }

        return analysis;
    },

    /**
     * Format value for display (snake_case to Title Case)
     */
    formatValue: function(value) {
        if (!value) return "";
        return value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    },

    /**
     * Export current state for saving
     */
    exportState: function() {
        return JSON.parse(JSON.stringify(this.state));
    },

    /**
     * Generate comprehensive report
     */
    generateReport: function() {
        const report = {
            generatedAt: new Date().toISOString(),
            lifeStage: GAME_DATA.dimensions.lifeStage.labels[this.state.lifeStage],
            advantageScore: this.state.advantageScore,
            choicesSummary: [],
            consequencesSummary: [],
            synthesisAnalysis: this.generateSynthesisAnalysis()
        };

        // Summarize all choices by module
        for (let moduleId = 1; moduleId <= 8; moduleId++) {
            const moduleChoices = this.state.choices[moduleId];
            if (moduleChoices) {
                const module = GAME_DATA.modules[moduleId];
                report.choicesSummary.push({
                    module: moduleId,
                    title: module?.title || `Module ${moduleId}`,
                    choices: Object.entries(moduleChoices).map(([question, choice]) => ({
                        question,
                        choice: this.formatValue(choice)
                    }))
                });
            }
        }

        // Summarize consequences
        report.consequencesSummary = this.state.consequences.map(c => ({
            module: c.moduleId,
            choice: c.consequence.label,
            immediate: c.consequence.immediate,
            personalizedAdditions: c.consequence.personalizedAdditions
        }));

        return report;
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameEngine;
}
