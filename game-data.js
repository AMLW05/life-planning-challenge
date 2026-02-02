/**
 * Life Planning Challenge - Game Data
 * Complete choice/consequence data for all 8 modules with life-stage branching
 */

const GAME_DATA = {
    // Module definitions
    modules: {
        1: { id: 1, title: "Family Origins & Starting Point", hammondRef: "Ch. 1", estimatedTime: "20 min" },
        2: { id: 2, title: "Education & Career Pathways", hammondRef: "Ch. 4", estimatedTime: "20 min", branchesByLifeStage: true },
        3: { id: 3, title: "Relationships & Communication", hammondRef: "Ch. 5-6", estimatedTime: "20 min", branchesByLifeStage: true },
        4: { id: 4, title: "Partner Selection & Compatibility", hammondRef: "Ch. 7-8", estimatedTime: "20 min", branchesByLifeStage: true },
        5: { id: 5, title: "Marriage & Partnership Formation", hammondRef: "Ch. 9", estimatedTime: "20 min", branchesByLifeStage: true },
        6: { id: 6, title: "Parenthood & Work-Family Balance", hammondRef: "Ch. 11-12", estimatedTime: "20 min", branchesByLifeStage: true },
        7: { id: 7, title: "Family Challenges & Resilience", hammondRef: "Ch. 13-14", estimatedTime: "15 min", branchesByLifeStage: true },
        8: { id: 8, title: "Systems Thinking & Reflection", hammondRef: "Ch. 15", estimatedTime: "20 min", branchesByLifeStage: true }
    },

    // State tracking dimensions
    dimensions: {
        lifeStage: ["traditional", "returning", "midcareer", "laterlife"],
        economicClass: ["affluent", "middle", "working", "struggling"],
        relationshipPath: ["single", "partnered", "divorced", "widowed"],
        parenthoodPath: ["childfree", "parent", "empty_nest"]
    },

    // ========== MODULE 1: FAMILY ORIGINS ==========
    choices: {
        // Life Stage Selection
        m1_lifestage: {
            traditional: {
                label: "Traditional-Age (18-24)", brief: "Launching into adulthood", icon: "🎓",
                consequence: { immediate: "You're making foundational decisions with maximum flexibility.", futureImpacts: ["Longest time horizon", "Widest options", "Building from scratch"] },
                stateChanges: { lifeStage: "traditional" }
            },
            returning: {
                label: "Returning Adult (25-35)", brief: "Balancing existing commitments", icon: "🔄",
                consequence: { immediate: "You're juggling multiple roles while pursuing change.", futureImpacts: ["Role strain", "Existing responsibilities", "Career pivot window"] },
                stateChanges: { lifeStage: "returning" }
            },
            midcareer: {
                label: "Mid-Career (36-50)", brief: "Sandwich generation pressures", icon: "⚖️",
                consequence: { immediate: "Peak demands from children and aging parents.", futureImpacts: ["Competing caregiving", "Career at critical point", "Financial obligations"] },
                stateChanges: { lifeStage: "midcareer" }
            },
            laterlife: {
                label: "Later-Life (50+)", brief: "Transitions and legacy", icon: "🌅",
                consequence: { immediate: "Focus on generativity and meaning-making.", futureImpacts: ["Retirement planning", "Health considerations", "Legacy work"] },
                stateChanges: { lifeStage: "laterlife" }
            }
        },

        // Family Structure
        m1_family: {
            nuclear_traditional: {
                label: "Nuclear Family", brief: "Two parents + children", icon: "🏠",
                consequence: { immediate: "Stable dual income but limited extended support.", sociologicalLink: { concept: "nuclear-family", hammondRef: "Ch. 1" }, futureImpacts: ["Employer benefit access model", "Geographic mobility expected", "May expect similar structure"] },
                stateChanges: { familyBackground: "nuclear", advantageScore: 1 }
            },
            extended_multigenerational: {
                label: "Extended Family", brief: "Multigenerational household", icon: "👨‍👩‍👧‍👦",
                consequence: { immediate: "Built-in support networks and shared resources.", sociologicalLink: { concept: "extended-family", hammondRef: "Ch. 1" }, futureImpacts: ["Strong family obligations", "Built-in childcare", "Geographic constraints"] },
                stateChanges: { familyBackground: "extended", advantageScore: 1 }
            },
            single_parent: {
                label: "Single-Parent", brief: "One parent managing all", icon: "👤",
                consequence: { immediate: "Developed resilience through necessity but faced resource constraints.", futureImpacts: ["May prioritize economic security", "Learned independence early", "Limited safety net"] },
                stateChanges: { familyBackground: "single_parent", advantageScore: -1 }
            },
            chosen_family: {
                label: "Chosen Family", brief: "Non-biological support network", icon: "🤝",
                consequence: { immediate: "Learned that family is about mutual support, not just biology.", sociologicalLink: { concept: "chosen-family", hammondRef: "Ch. 1" }, futureImpacts: ["Flexible family definitions", "May lack legal protections", "Strong community bonds"] },
                stateChanges: { familyBackground: "chosen", advantageScore: 0 }
            }
        },

        // Core Value
        m1_value: {
            economic_security: {
                label: "Economic Security", brief: "Financial stability first", icon: "💰",
                consequence: { immediate: "You'll prioritize stable income and savings.", futureImpacts: ["Higher-paying career choices", "Delayed family formation", "Practical relationship decisions"] },
                stateChanges: { coreValue: "economic" }
            },
            relationships: {
                label: "Relationships First", brief: "Connection over career", icon: "❤️",
                consequence: { immediate: "You'll prioritize time with loved ones.", futureImpacts: ["Flexible work choices", "Geographic constraints near family", "Rich social support"] },
                stateChanges: { coreValue: "relationships" }
            },
            achievement: {
                label: "Personal Achievement", brief: "Growth and advancement", icon: "🏆",
                consequence: { immediate: "You'll prioritize education and career development.", futureImpacts: ["Graduate education likely", "Career-family tension", "Professional fulfillment"] },
                stateChanges: { coreValue: "achievement" }
            },
            social_justice: {
                label: "Social Justice", brief: "Meaningful impact work", icon: "⚖️",
                consequence: { immediate: "You'll prioritize purpose-driven work.", futureImpacts: ["Nonprofit/public service", "Lower income potential", "Values-aligned community"] },
                stateChanges: { coreValue: "justice" }
            }
        },

        // ========== MODULE 2: EDUCATION & CAREER ==========
        // Traditional Life Stage
        m2_education_traditional: {
            bachelor: { label: "Bachelor's Degree", brief: "4 years, $30K debt, $50-60K salary", icon: "🎓",
                consequence: { immediate: "Graduate at 26 with strong career prospects but significant debt.", sociologicalLink: { concept: "educational-homogamy", hammondRef: "Ch. 4" }, futureImpacts: ["Professional careers open", "Delayed parenthood", "College-educated marriage market"] },
                stateChanges: { educationLevel: "bachelor", debt: 30000, advantageScore: 2 }
            },
            associate: { label: "Associate Degree", brief: "2 years, $12K debt, $40-45K salary", icon: "📋",
                consequence: { immediate: "Graduate at 24 with moderate debt and technical skills.", futureImpacts: ["Earlier family formation", "Can upgrade later", "Technical career path"] },
                stateChanges: { educationLevel: "associate", debt: 12000, advantageScore: 1 }
            },
            trade: { label: "Trade Certification", brief: "1 year, $5K cost, $35-50K salary", icon: "🔧",
                consequence: { immediate: "Enter workforce at 23 with specialized skills.", futureImpacts: ["Earliest stable income", "Union benefits possible", "Physical demands"] },
                stateChanges: { educationLevel: "trade", debt: 5000, advantageScore: 0 }
            },
            workforce: { label: "Enter Workforce Now", brief: "No debt, $28-32K salary", icon: "💼",
                consequence: { immediate: "Start earning immediately but limited advancement.", sociologicalLink: { concept: "marriage-bar", hammondRef: "Ch. 9" }, futureImpacts: ["Economic vulnerability", "May face marriage bar", "Limited career ceiling"] },
                stateChanges: { educationLevel: "highschool", debt: 0, advantageScore: -1 }
            }
        },
        m2_career_traditional: {
            healthcare: { label: "Healthcare", brief: "Nursing/Med Tech, $45-60K", icon: "🏥",
                consequence: { immediate: "Female-dominated field with high demand but shift work.", sociologicalLink: { concept: "care-work", hammondRef: "Ch. 4" }, futureImpacts: ["Job security", "Shift work complicates childcare", "Care work undervalued"] },
                stateChanges: { careerField: "healthcare", flexibility: "low" }
            },
            education: { label: "Education", brief: "Teaching, $40-48K", icon: "📚",
                consequence: { immediate: "Family-friendly schedules but limited income growth.", futureImpacts: ["Schedule aligns with kids", "Work comes home", "Lower income = default caregiver"] },
                stateChanges: { careerField: "education", flexibility: "medium" }
            },
            trades: { label: "Skilled Trades", brief: "Construction/Electric, $42-55K", icon: "🔨",
                consequence: { immediate: "Male-dominated field with good pay but physical demands.", sociologicalLink: { concept: "occupational-segregation", hammondRef: "Ch. 4" }, futureImpacts: ["Good income without degree", "Physical toll by 40s", "Rigid schedules"] },
                stateChanges: { careerField: "trades", flexibility: "low" }
            },
            tech: { label: "Business/Technology", brief: "IT/Software, $50-70K", icon: "💻",
                consequence: { immediate: "High income enables childcare but 'always on' culture.", futureImpacts: ["Highest income", "Long hours expected", "Motherhood penalty vs fatherhood premium"] },
                stateChanges: { careerField: "tech", flexibility: "medium" }
            }
        },

        // Returning Life Stage
        m2_education_returning: {
            fulltime_school: { label: "Full-Time School", brief: "Quit job, 2-4 years, $20-40K debt", icon: "🎓",
                consequence: { immediate: "Career reset opportunity but major financial sacrifice.", futureImpacts: ["Complete career change", "Lost wages", "Partner must support"] },
                stateChanges: { educationPath: "fulltime", advantageScore: 1 }
            },
            parttime_school: { label: "Part-Time School", brief: "Keep job, 3-5 years, $15-25K debt", icon: "📖",
                consequence: { immediate: "Gradual transition but exhausting pace.", sociologicalLink: { concept: "time-poverty", hammondRef: "Ch. 4" }, futureImpacts: ["Income stability", "No family time", "5 years of grind"] },
                stateChanges: { educationPath: "parttime", advantageScore: 0 }
            },
            certification: { label: "Professional Certification", brief: "6-12 months, $5-10K", icon: "📜",
                consequence: { immediate: "Quick skill upgrade with minimal disruption.", futureImpacts: ["Targeted improvement", "Limited transformation", "Manageable timeline"] },
                stateChanges: { educationPath: "certification", advantageScore: 0 }
            },
            stay_advance: { label: "Stay & Advance", brief: "No school, pursue promotions", icon: "📈",
                consequence: { immediate: "Build on current path without disruption.", sociologicalLink: { concept: "path-dependency", hammondRef: "Ch. 4" }, futureImpacts: ["Stability", "May stay unfulfilled", "Miss change window"] },
                stateChanges: { educationPath: "stay", advantageScore: 0 }
            },
            lateral_pivot: { label: "Lateral Pivot", brief: "Switch roles without school", icon: "↔️",
                consequence: { immediate: "Fresh start using existing skills differently.", futureImpacts: ["Use current networks", "Moderate risk", "Prove yourself again"] },
                stateChanges: { educationPath: "pivot", advantageScore: 0 }
            }
        },
        m2_situation_returning: {
            single_independent: { label: "Single, No Kids", brief: "Maximum flexibility", icon: "🦅",
                consequence: { immediate: "Only constraint is income/debt. Can take risks.", futureImpacts: ["Optimize for self", "No care obligations", "Class privilege"] },
                stateChanges: { familySituation: "single" }
            },
            partnered_nokids: { label: "Partnered, No Kids", brief: "Moderate flexibility", icon: "👫",
                consequence: { immediate: "Partner can support income loss if needed.", sociologicalLink: { concept: "gender-dynamics", hammondRef: "Ch. 4" }, futureImpacts: ["Whose career is 'primary'?", "More resources than solo", "Partner adjustment needed"] },
                stateChanges: { familySituation: "partnered_nokids" }
            },
            young_kids: { label: "Young Children (0-5)", brief: "High constraints", icon: "👶",
                consequence: { immediate: "Childcare costs $900-1,350/month. Someone must manage.", sociologicalLink: { concept: "second-shift", hammondRef: "Ch. 12" }, futureImpacts: ["Career change harder", "Mothers more constrained", "Intensive parenting demands"] },
                stateChanges: { familySituation: "young_kids" }
            },
            school_age_kids: { label: "School-Age Kids (6-12)", brief: "Moderate constraints", icon: "🎒",
                consequence: { immediate: "Kids in school = fewer childcare hours but still demands.", futureImpacts: ["Some flexibility", "After-school/summer coverage", "Mental labor persists"] },
                stateChanges: { familySituation: "school_age" }
            }
        },

        // Mid-Career Life Stage
        m2_career_midcareer: {
            continue_current: { label: "Continue Current", brief: "Stay the course, max earnings", icon: "➡️",
                consequence: { immediate: "Stability and predictability but potential burnout.", sociologicalLink: { concept: "golden-handcuffs", hammondRef: "Ch. 4" }, futureImpacts: ["Family depends on income", "May feel stuck", "Safe choice"] },
                stateChanges: { careerPath: "continue" }
            },
            leadership_advancement: { label: "Pursue Leadership", brief: "$10-30K raise, more hours", icon: "👔",
                consequence: { immediate: "Peak earning and status but less family time.", futureImpacts: ["Women face bias", "More stress", "Legacy opportunity"] },
                stateChanges: { careerPath: "leadership", advantageScore: 1 }
            },
            reduce_caregiving: { label: "Reduce for Caregiving", brief: "$15-30K income cut", icon: "🏠",
                consequence: { immediate: "Time for aging parents and teens but career stalls.", sociologicalLink: { concept: "opting-out", hammondRef: "Ch. 4" }, futureImpacts: ["Highly gendered choice", "Retirement savings hit", "Life balance gained"] },
                stateChanges: { careerPath: "reduce", advantageScore: -1 }
            },
            start_business: { label: "Start Business", brief: "Variable income, high risk", icon: "🚀",
                consequence: { immediate: "Flexibility and autonomy but income instability.", futureImpacts: ["Loss of benefits", "Requires safety net", "Class privilege needed"] },
                stateChanges: { careerPath: "business" }
            },
            late_pivot: { label: "Industry Pivot", brief: "Change fields at 42", icon: "🔄",
                consequence: { immediate: "New challenge but steep learning curve and ageism.", futureImpacts: ["Face age discrimination", "Start over in seniority", "Purpose vs. pay trade-off"] },
                stateChanges: { careerPath: "pivot" }
            }
        },
        m2_caregiving_midcareer: {
            teens_home: { label: "Teenagers at Home", brief: "Time-intensive but flexible", icon: "🚗",
                consequence: { immediate: "Kids need you differently—driving, college prep, mental health.", futureImpacts: ["College costs loom", "Risk tolerance affected", "Intensive parenting extends"] },
                stateChanges: { caregivingSituation: "teens" }
            },
            young_adults_college: { label: "Young Adults/College", brief: "Financial support needed", icon: "🎓",
                consequence: { immediate: "Kids launching but need tuition, rent, emergencies.", sociologicalLink: { concept: "intergenerational-transfers", hammondRef: "Ch. 4" }, futureImpacts: ["Economic inequality = longer support", "Emotional support too", "Can't self-support"] },
                stateChanges: { caregivingSituation: "young_adults" }
            },
            aging_parents: { label: "Aging Parents Need Care", brief: "Time-consuming, emotional", icon: "👴",
                consequence: { immediate: "Medical appointments, home help, possible nursing home decisions.", sociologicalLink: { concept: "gendered-eldercare", hammondRef: "Ch. 4" }, futureImpacts: ["Daughters do bulk of care", "Unpaid care work costs careers", "Emotionally draining"] },
                stateChanges: { caregivingSituation: "parents" }
            },
            sandwich_both: { label: "Sandwich Generation", brief: "Peak demand both directions", icon: "🥪",
                consequence: { immediate: "Teens/young adults AND aging parents. You're the default for everyone.", sociologicalLink: { concept: "sandwich-generation", hammondRef: "Ch. 4" }, futureImpacts: ["Time poverty extreme", "Women disproportionately crushed", "No policy support"] },
                stateChanges: { caregivingSituation: "sandwich", advantageScore: -1 }
            }
        },

        // Later-Life Stage
        m2_retirement_laterlife: {
            continue_to_67: { label: "Work to 67", brief: "Max pension, max Social Security", icon: "📅",
                consequence: { immediate: "9 more years of stability and financial security.", futureImpacts: ["Can AFFORD to retire at 67", "Less time with grandkids", "Health may decline"] },
                stateChanges: { retirementPlan: "standard" }
            },
            semi_retirement: { label: "Semi-Retirement", brief: "Part-time, 20-30 hrs/week", icon: "⏰",
                consequence: { immediate: "Lower income but more time for life.", futureImpacts: ["Gradual transition", "Grandparenting time", "Professional privilege"] },
                stateChanges: { retirementPlan: "semi" }
            },
            career_change_fulfillment: { label: "Purpose-Driven Change", brief: "Nonprofit, teaching, service", icon: "💫",
                consequence: { immediate: "Switch to mission-driven work for meaning.", sociologicalLink: { concept: "generativity", hammondRef: "Ch. 4" }, futureImpacts: ["Income cut", "Legacy focus", "Class privilege to prioritize purpose"] },
                stateChanges: { retirementPlan: "purpose" }
            },
            retire_now: { label: "Retire Now (58)", brief: "If financially able", icon: "🏖️",
                consequence: { immediate: "Freedom and time while health allows.", futureImpacts: ["Reduced Social Security", "Spend savings faster", "Identity shift"] },
                stateChanges: { retirementPlan: "early" }
            },
            work_past_67: { label: "Work Past 67", brief: "Into 70s, need or want", icon: "💪",
                consequence: { immediate: "Continued income and social connection.", futureImpacts: ["Often necessity not choice", "Health risks", "Insufficient savings force work"] },
                stateChanges: { retirementPlan: "extended", advantageScore: -1 }
            }
        },
        m2_situation_laterlife: {
            adult_kids_independent: { label: "Kids Independent", brief: "Launched and self-supporting", icon: "🎉",
                consequence: { immediate: "Free to focus on yourself and grandchildren.", futureImpacts: ["Successful launch = class privilege", "Full retirement possible", "Can prioritize self"] },
                stateChanges: { familySituation: "kids_independent" }
            },
            adult_kids_struggling: { label: "Kids Struggling", brief: "30s but need financial help", icon: "💸",
                consequence: { immediate: "Can't fully retire because kids still need support.", sociologicalLink: { concept: "intergenerational-transfers", hammondRef: "Ch. 4" }, futureImpacts: ["Economic inequality forces extended support", "Retirement delayed", "Boomerang generation"] },
                stateChanges: { familySituation: "kids_struggling", advantageScore: -1 }
            },
            active_grandparenting: { label: "Active Grandparent", brief: "Providing regular childcare", icon: "👶",
                consequence: { immediate: "Rewarding but time and energy intensive.", futureImpacts: ["Unpaid labor subsidizes economy", "Grandmothers do more", "Enables adult children's employment"] },
                stateChanges: { familySituation: "grandparenting" }
            },
            aging_parents_alive: { label: "Very Elderly Parents (85+)", brief: "Still needing significant care", icon: "👵",
                consequence: { immediate: "You're 58 caring for 85-year-olds. Exhausting.", sociologicalLink: { concept: "gendered-eldercare", hammondRef: "Ch. 4" }, futureImpacts: ["Longer lifespans = extended caregiving", "Daughters still default", "Impacts YOUR retirement"] },
                stateChanges: { familySituation: "eldercare", advantageScore: -1 }
            }
        },

        // ========== MODULE 3: RELATIONSHIPS ==========
        m3_relationship_traditional: {
            serious_early: { label: "Committed Early", brief: "Prioritize relationship", icon: "💑",
                consequence: { immediate: "Invest deeply in partnership alongside career.", futureImpacts: ["Path toward marriage by late 20s", "May limit career mobility", "Emotional security"] },
                stateChanges: { relationshipPath: "serious_early" }
            },
            exploratory_dating: { label: "Exploratory Dating", brief: "Learn through relationships", icon: "🔍",
                consequence: { immediate: "Date casually, learn about yourself, no commitment pressure.", sociologicalLink: { concept: "emerging-adulthood", hammondRef: "Ch. 4" }, futureImpacts: ["Extended singlehood normative", "Career focus enabled", "Identity exploration"] },
                stateChanges: { relationshipPath: "exploratory" }
            },
            career_focus_defer: { label: "Career Priority", brief: "Deliberately delay romance", icon: "💼",
                consequence: { immediate: "Focus on education/career, defer romantic commitment.", futureImpacts: ["Strategic sequencing", "May narrow marriage market", "Class privilege"] },
                stateChanges: { relationshipPath: "career_defer" }
            },
            balanced_organic: { label: "Balanced Approach", brief: "Open if right person appears", icon: "🌱",
                consequence: { immediate: "Not actively seeking but open to relationships.", futureImpacts: ["Depends on social networks", "Homogamy and propinquity", "Unpredictable timing"] },
                stateChanges: { relationshipPath: "balanced" }
            }
        },
        m3_communication_traditional: {
            direct_expressive: { label: "Direct & Expressive", brief: "Address issues immediately", icon: "💬",
                consequence: { immediate: "Reduces resentment buildup, promotes authenticity.", futureImpacts: ["Requires emotional energy", "Can overwhelm partners", "Prevents Four Horsemen"] },
                stateChanges: { communicationStyle: "direct" }
            },
            harmony_prioritizing: { label: "Harmony-Seeking", brief: "Avoid confrontation", icon: "☮️",
                consequence: { immediate: "Prioritize peace, pick battles carefully.", futureImpacts: ["Accumulated resentment risk", "Partner unaware of problems", "Cultural variation"] },
                stateChanges: { communicationStyle: "harmony" }
            },
            problem_solving_logical: { label: "Analytical Problem-Solver", brief: "Focus on solutions", icon: "🧠",
                consequence: { immediate: "De-escalates through rationality, needs processing time.", futureImpacts: ["May dismiss emotions", "Frustrate partners wanting connection", "Effective for logistics"] },
                stateChanges: { communicationStyle: "analytical" }
            },
            emotional_labor_manager: { label: "Relationship Manager", brief: "Active maintenance", icon: "📋",
                consequence: { immediate: "Do heavy emotional labor—check-ins, remembering, initiating.", sociologicalLink: { concept: "emotional-labor", hammondRef: "Ch. 6" }, futureImpacts: ["Highly gendered", "Burnout risk", "Enable partner passivity"] },
                stateChanges: { communicationStyle: "manager" }
            }
        },

        // Module 3 - Returning (25-35)
        m3_relationship_returning: {
            established_partnership: { label: "Established Partnership", brief: "3-8 years together", icon: "💍",
                consequence: { immediate: "Navigating cohabitation or marriage, managing careers together.", futureImpacts: ["Relationship maintenance phase", "Work-family negotiations", "Possibly discussing children"] },
                stateChanges: { relationshipPath: "established" }
            },
            post_breakup_healing: { label: "Post-Breakup/Divorce", brief: "Rebuilding after loss", icon: "💔",
                consequence: { immediate: "Healing from failed relationship, recalibrating expectations.", sociologicalLink: { concept: "path-dependency", hammondRef: "Ch. 4" }, futureImpacts: ["Prior relationship informs patterns", "Dating with experience", "May have children from prior relationship"] },
                stateChanges: { relationshipPath: "post_breakup" }
            },
            new_relationship_forming: { label: "New Relationship", brief: "Met someone recently", icon: "🌟",
                consequence: { immediate: "Balancing new romance with established career and responsibilities.", futureImpacts: ["Compressed timeline decisions", "Both have histories", "Blended family potential"] },
                stateChanges: { relationshipPath: "new_forming" }
            },
            single_by_choice: { label: "Single by Choice", brief: "Prioritizing independence", icon: "🦅",
                consequence: { immediate: "Choosing independence over partnership at this life stage.", futureImpacts: ["Focus on career/self", "Face social pressure", "Maintain freedom"] },
                stateChanges: { relationshipPath: "single_choice" }
            }
        },
        m3_communication_returning: {
            established_patterns: { label: "Established Patterns", brief: "Years of learned dynamics", icon: "🔄",
                consequence: { immediate: "Communication patterns developed over years in relationship.", futureImpacts: ["Patterns hard to change", "Both contribute to dynamic", "Repair work possible"] },
                stateChanges: { communicationStyle: "established" }
            },
            seeking_improvement: { label: "Seeking Improvement", brief: "Therapy or self-work", icon: "📈",
                consequence: { immediate: "Actively working to improve communication skills.", futureImpacts: ["Growth mindset", "May outpace partner", "Investment in change"] },
                stateChanges: { communicationStyle: "improving" }
            },
            conflict_avoidant: { label: "Conflict Avoidant", brief: "Keeping peace at cost", icon: "🙈",
                consequence: { immediate: "Avoiding difficult conversations to maintain stability.", futureImpacts: ["Resentment buildup", "Issues unresolved", "Explosion risk"] },
                stateChanges: { communicationStyle: "avoidant" }
            },
            direct_negotiation: { label: "Direct Negotiation", brief: "Explicit problem-solving", icon: "🤝",
                consequence: { immediate: "Discussing issues openly with structured approach.", futureImpacts: ["Clear expectations", "Requires both partners", "Business-like risk"] },
                stateChanges: { communicationStyle: "negotiation" }
            }
        },

        // Module 3 - Midcareer (36-50)
        m3_relationship_midcareer: {
            long_term_stable: { label: "Long-Term Stable", brief: "15+ years together", icon: "🏠",
                consequence: { immediate: "Deep history and shared life, navigating middle age together.", futureImpacts: ["Empty nest transition coming", "Rediscovery period", "Stability vs. stagnation"] },
                stateChanges: { relationshipPath: "long_term" }
            },
            midlife_strain: { label: "Relationship Strain", brief: "Challenges emerging", icon: "⚠️",
                consequence: { immediate: "Long-term relationship showing cracks under midlife pressures.", sociologicalLink: { concept: "sandwich-generation", hammondRef: "Ch. 4" }, futureImpacts: ["May lead to divorce", "Counseling option", "Reassessing compatibility"] },
                stateChanges: { relationshipPath: "strained" }
            },
            remarried_blended: { label: "Remarried/Blended", brief: "Second marriage dynamics", icon: "👨‍👩‍👧‍👦",
                consequence: { immediate: "Managing blended family with step-children and ex-spouse coordination.", futureImpacts: ["Complex logistics", "Loyalty conflicts", "Different parenting styles"] },
                stateChanges: { relationshipPath: "blended" }
            },
            single_midlife: { label: "Single at Midlife", brief: "Dating or independent", icon: "🔍",
                consequence: { immediate: "Navigating dating/independence after divorce or never marrying.", futureImpacts: ["Smaller dating pool", "Know yourself better", "Independence valued"] },
                stateChanges: { relationshipPath: "single_midlife" }
            }
        },
        m3_communication_midcareer: {
            comfortable_routine: { label: "Comfortable Routine", brief: "Predictable patterns", icon: "🔁",
                consequence: { immediate: "Communication follows established patterns—efficient but potentially stale.", futureImpacts: ["May miss new issues", "Comfort vs. growth", "Autopilot risk"] },
                stateChanges: { communicationStyle: "routine" }
            },
            rekindling_effort: { label: "Rekindling Effort", brief: "Intentional reconnection", icon: "🔥",
                consequence: { immediate: "Making deliberate effort to deepen communication and connection.", futureImpacts: ["Requires both partners", "Against inertia", "Relationship renewal"] },
                stateChanges: { communicationStyle: "rekindling" }
            },
            parallel_lives: { label: "Parallel Lives", brief: "Coexisting separately", icon: "↔️",
                consequence: { immediate: "Living together but communicating minimally—roommates more than partners.", futureImpacts: ["Loneliness in marriage", "Kids notice", "Decision point coming"] },
                stateChanges: { communicationStyle: "parallel" }
            },
            transparent_partnership: { label: "Transparent Partnership", brief: "Full honesty practice", icon: "🪟",
                consequence: { immediate: "Radical honesty about needs, fears, and desires.", futureImpacts: ["Vulnerability required", "Deepest connection", "Hard truths surface"] },
                stateChanges: { communicationStyle: "transparent" }
            }
        },

        // Module 3 - Later Life (50+)
        m3_relationship_laterlife: {
            long_marriage_thriving: { label: "Long Marriage Thriving", brief: "25+ years strong", icon: "💎",
                consequence: { immediate: "Decades together, shared history, navigating aging as team.", futureImpacts: ["Mutual caregiving coming", "Legacy focus", "Deepened bond"] },
                stateChanges: { relationshipPath: "thriving" }
            },
            gray_divorce: { label: "Gray Divorce", brief: "Late-life separation", icon: "💔",
                consequence: { immediate: "Ending long marriage—growing trend among 50+.", sociologicalLink: { concept: "generativity", hammondRef: "Ch. 4" }, futureImpacts: ["Asset division complex", "Adult children affected", "Independence pursuit"] },
                stateChanges: { relationshipPath: "gray_divorce" }
            },
            widowed: { label: "Widowed", brief: "Lost life partner", icon: "🕯️",
                consequence: { immediate: "Grieving while navigating life without decades-long partner.", futureImpacts: ["Social network changes", "Identity reconstruction", "May seek companionship"] },
                stateChanges: { relationshipPath: "widowed" }
            },
            late_life_romance: { label: "Late-Life Romance", brief: "New love after 50", icon: "🌹",
                consequence: { immediate: "Finding new partnership in later life—different priorities than young love.", futureImpacts: ["Companionship focus", "Adult children's opinions", "Financial entanglement questions"] },
                stateChanges: { relationshipPath: "late_romance" }
            }
        },
        m3_communication_laterlife: {
            decades_of_practice: { label: "Decades of Practice", brief: "Well-worn patterns", icon: "📚",
                consequence: { immediate: "Communication patterns refined over decades—efficient shorthand.", futureImpacts: ["May miss changes", "Deep understanding", "Hard to change"] },
                stateChanges: { communicationStyle: "practiced" }
            },
            health_focused: { label: "Health-Focused", brief: "Medical decisions together", icon: "🏥",
                consequence: { immediate: "Communication increasingly about health, care needs, end-of-life planning.", futureImpacts: ["Difficult conversations", "Care burden gendered", "Advance directives"] },
                stateChanges: { communicationStyle: "health_focused" }
            },
            legacy_discussions: { label: "Legacy Discussions", brief: "Values and inheritance", icon: "📜",
                consequence: { immediate: "Talking about what to pass on—values, stories, assets.", futureImpacts: ["Family conflicts possible", "Generativity need", "Meaning-making"] },
                stateChanges: { communicationStyle: "legacy" }
            },
            companionate_comfort: { label: "Companionate Comfort", brief: "Quiet togetherness", icon: "☕",
                consequence: { immediate: "Less verbal communication, more comfortable presence together.", futureImpacts: ["Secure attachment", "May take for granted", "Deep familiarity"] },
                stateChanges: { communicationStyle: "companionate" }
            }
        },

        // ========== MODULE 4: PARTNER SELECTION ==========
        m4_partner_traditional: {
            education_career_match: { label: "Education/Career Match", brief: "Similar achievements", icon: "🎓",
                consequence: { immediate: "You prioritize educational homogamy—similar degrees and career paths.", sociologicalLink: { concept: "educational-homogamy", hammondRef: "Ch. 7" }, futureImpacts: ["Shared cultural capital", "Similar networks", "Earnings potential match"] },
                stateChanges: { partnerPriority: "achievement" }
            },
            emotional_connection: { label: "Emotional Connection", brief: "Chemistry first", icon: "❤️",
                consequence: { immediate: "You follow your heart—emotional bond takes priority.", futureImpacts: ["Strong attachment", "May overlook practical issues", "Passion-based decision"] },
                stateChanges: { partnerPriority: "emotional" }
            },
            family_values_align: { label: "Family Values Align", brief: "Shared vision for family", icon: "👨‍👩‍👧",
                consequence: { immediate: "You prioritize agreement on children, religion, lifestyle.", futureImpacts: ["Reduces future conflict", "May limit pool", "Clear expectations"] },
                stateChanges: { partnerPriority: "values" }
            },
            economic_stability: { label: "Economic Stability", brief: "Financial security focus", icon: "💰",
                consequence: { immediate: "You seek a partner with stable income and financial responsibility.", sociologicalLink: { concept: "marriage-bar", hammondRef: "Ch. 7" }, futureImpacts: ["Economic foundation", "May delay for stability", "Practical approach"] },
                stateChanges: { partnerPriority: "economic" }
            }
        },
        m4_partner_returning: {
            current_partner_strong: { label: "Current Partner Strong", brief: "Relationship solid", icon: "💪",
                consequence: { immediate: "Your existing relationship provides stability for your transition.", futureImpacts: ["Support system", "Shared history", "Mutual investment"] },
                stateChanges: { relationshipStatus: "partnered_stable" }
            },
            current_partner_reassessing: { label: "Current Partner Reassessing", brief: "Relationship uncertain", icon: "🤔",
                consequence: { immediate: "Your return to school/career is straining the relationship.", futureImpacts: ["Role renegotiation needed", "Power dynamics shifting", "Possible divergence"] },
                stateChanges: { relationshipStatus: "partnered_strained" }
            },
            new_partner_post_breakup: { label: "New Partner Post-Breakup", brief: "Starting over", icon: "🔄",
                consequence: { immediate: "You're rebuilding after a breakup while managing other responsibilities.", futureImpacts: ["Learned from past", "Complicated logistics", "Clearer needs"] },
                stateChanges: { relationshipStatus: "new_partner" }
            },
            single_selective: { label: "Single, Selective", brief: "Focused on self", icon: "🎯",
                consequence: { immediate: "You're single and prioritizing education/career before relationships.", futureImpacts: ["Independence", "May face age pressure", "Self-development focus"] },
                stateChanges: { relationshipStatus: "single" }
            }
        },
        m4_partner_midcareer: {
            longterm_satisfying: { label: "Long-term Satisfying", brief: "Partnership thriving", icon: "🌟",
                consequence: { immediate: "Your long partnership has weathered challenges and deepened.", futureImpacts: ["Secure base", "Companionship", "Mutual support"] },
                stateChanges: { relationshipStatus: "longterm_strong" }
            },
            longterm_drifted: { label: "Long-term Drifted", brief: "Growing apart", icon: "↔️",
                consequence: { immediate: "Years together but you've grown in different directions.", futureImpacts: ["Gray divorce risk", "Empty nest test", "Reconnection possible"] },
                stateChanges: { relationshipStatus: "longterm_drifted" }
            },
            new_partner_postdivorce: { label: "New Partner Post-Divorce", brief: "Second chance", icon: "💑",
                consequence: { immediate: "You're building a new relationship after divorce.", futureImpacts: ["Blended family issues", "Learned from past", "Clearer priorities"] },
                stateChanges: { relationshipStatus: "remarried" }
            },
            postwidow_dating: { label: "Post-Widow Dating", brief: "Grieving and dating", icon: "🕊️",
                consequence: { immediate: "You're cautiously dating after losing a spouse.", futureImpacts: ["Grief process ongoing", "May face family judgment", "Different needs now"] },
                stateChanges: { relationshipStatus: "widowed_dating" }
            }
        },
        m4_partner_laterlife: {
            decades_long_partnership: { label: "Decades-Long Partnership", brief: "Lifetime together", icon: "💍",
                consequence: { immediate: "You've been with the same partner for most of your adult life.", futureImpacts: ["Deep interdependence", "Health caregiving likely", "Shared history"] },
                stateChanges: { relationshipStatus: "longterm" }
            },
            recent_widowhood: { label: "Recent Widowhood", brief: "Lost life partner", icon: "🕯️",
                consequence: { immediate: "You're adjusting to life without your long-term partner.", futureImpacts: ["Grief journey", "Identity reconstruction", "Support needs high"] },
                stateChanges: { relationshipStatus: "widowed" }
            },
            gray_divorce_single: { label: "Gray Divorce Single", brief: "Divorced later in life", icon: "📜",
                consequence: { immediate: "You divorced after many years of marriage.", sociologicalLink: { concept: "gray-divorce", hammondRef: "Ch. 14" }, futureImpacts: ["Financial impact", "Social network shift", "Independence/loneliness"] },
                stateChanges: { relationshipStatus: "divorced" }
            },
            new_latelife_companion: { label: "New Late-Life Companion", brief: "Found love again", icon: "🌹",
                consequence: { immediate: "You've found a new partner later in life.", futureImpacts: ["Different expectations", "Family reactions vary", "Companionship focus"] },
                stateChanges: { relationshipStatus: "new_partner" }
            }
        },
        m4_priorities_traditional: {
            traditional_pacing: { label: "Traditional Pacing", brief: "Date, engage, marry", icon: "💒",
                consequence: { immediate: "You follow a traditional courtship timeline.", futureImpacts: ["Social approval", "Clear milestones", "May feel pressure"] },
                stateChanges: { relationshipPacing: "traditional" }
            },
            egalitarian_progressive: { label: "Egalitarian Progressive", brief: "Equal partnership focus", icon: "⚖️",
                consequence: { immediate: "You prioritize building an equal partnership from the start.", futureImpacts: ["Role flexibility", "May conflict with families", "Intentional building"] },
                stateChanges: { relationshipPacing: "egalitarian" }
            },
            practical_testing: { label: "Practical Testing", brief: "Cohabit to test", icon: "🏠",
                consequence: { immediate: "You move in together to test compatibility before commitment.", sociologicalLink: { concept: "cohabitation", hammondRef: "Ch. 8" }, futureImpacts: ["Information gathering", "Sliding vs deciding risk", "Practical knowledge"] },
                stateChanges: { relationshipPacing: "cohabitation" }
            }
        },
        m4_priorities_returning: {
            life_goal_alignment: { label: "Life Goal Alignment", brief: "Shared vision essential", icon: "🎯",
                consequence: { immediate: "At this stage, you need a partner who shares your direction.", futureImpacts: ["Fewer surprises", "May limit options", "Practical focus"] },
                stateChanges: { partnerPriority: "goals" }
            },
            proven_reliability: { label: "Proven Reliability", brief: "Track record matters", icon: "📋",
                consequence: { immediate: "You prioritize demonstrated character over potential.", futureImpacts: ["Less risk", "May miss growth", "History as guide"] },
                stateChanges: { partnerPriority: "reliability" }
            },
            work_family_philosophy: { label: "Work-Family Philosophy", brief: "Division of labor match", icon: "⚖️",
                consequence: { immediate: "You need agreement on how to divide work and family.", futureImpacts: ["Reduces conflict", "May limit pool", "Explicit expectations"] },
                stateChanges: { partnerPriority: "workfamily" }
            }
        },
        m4_priorities_midcareer: {
            deep_companionship: { label: "Deep Companionship", brief: "Emotional intimacy", icon: "🤝",
                consequence: { immediate: "At this stage, emotional connection and companionship matter most.", futureImpacts: ["Quality over status", "Growth together", "Vulnerability needed"] },
                stateChanges: { partnerPriority: "companionship" }
            },
            mutual_caregiving: { label: "Mutual Caregiving", brief: "Support through aging", icon: "❤️‍🩹",
                consequence: { immediate: "You consider who will care for whom as you age.", futureImpacts: ["Practical concern", "Health considerations", "Long-term view"] },
                stateChanges: { partnerPriority: "caregiving" }
            },
            independent_autonomy: { label: "Independent Autonomy", brief: "Space to be yourself", icon: "🦋",
                consequence: { immediate: "You value maintaining your own identity and interests.", futureImpacts: ["Parallel lives risk", "Personal growth", "Boundary-setting"] },
                stateChanges: { partnerPriority: "autonomy" }
            }
        },
        m4_priorities_laterlife: {
            health_caregiving_focus: { label: "Health/Caregiving Focus", brief: "Mutual support", icon: "🏥",
                consequence: { immediate: "Health and ability to care for each other are central considerations.", futureImpacts: ["Practical necessity", "Burden concerns", "Insurance/assets matter"] },
                stateChanges: { partnerPriority: "health" }
            },
            companionship_legacy: { label: "Companionship & Legacy", brief: "Shared memories", icon: "📚",
                consequence: { immediate: "You prioritize companionship and creating meaning together.", futureImpacts: ["Quality of life", "Family dynamics", "Shared activities"] },
                stateChanges: { partnerPriority: "legacy" }
            },
            independent_community: { label: "Independent Community", brief: "Friends over partner", icon: "👥",
                consequence: { immediate: "You find meaning through community and friends rather than partnership.", futureImpacts: ["Social network key", "Independence valued", "Different support sources"] },
                stateChanges: { partnerPriority: "community" }
            }
        },

        // ========== MODULE 5: MARRIAGE/COHABITATION ==========
        m5_marriage_traditional: {
            marry_now_cleared_bar: { label: "Marry Now (Cleared Bar)", brief: "Ready for marriage", icon: "💍",
                consequence: { immediate: "You've met the modern 'marriage bar'—education, career, stability.", sociologicalLink: { concept: "marriage-bar", hammondRef: "Ch. 9" }, futureImpacts: ["Social recognition", "Legal protections", "Higher expectations"] },
                stateChanges: { marriageStatus: "married" }
            },
            cohabit_pathway: { label: "Cohabit First", brief: "Live together, then decide", icon: "🏠",
                consequence: { immediate: "You move in together as a step toward possible marriage.", futureImpacts: ["Sliding vs deciding", "Test compatibility", "May delay marriage"] },
                stateChanges: { marriageStatus: "cohabiting" }
            },
            marry_despite_bar: { label: "Marry Despite Bar", brief: "Love over economics", icon: "❤️",
                consequence: { immediate: "You marry before meeting traditional economic benchmarks.", futureImpacts: ["Economic stress likely", "Family concern", "May delay childbearing"] },
                stateChanges: { marriageStatus: "married_early" }
            },
            cohabit_alternative: { label: "Cohabit as Alternative", brief: "No marriage planned", icon: "🔗",
                consequence: { immediate: "You choose long-term cohabitation instead of marriage.", futureImpacts: ["Less legal protection", "More flexibility", "May face stigma"] },
                stateChanges: { marriageStatus: "cohabiting_permanent" }
            }
        },
        m5_marriage_returning: {
            already_married_stable: { label: "Already Married (Stable)", brief: "Marriage intact", icon: "💪",
                consequence: { immediate: "Your marriage is providing stability through your transition.", futureImpacts: ["Support system", "May feel constrained", "Mutual investment"] },
                stateChanges: { marriageStatus: "married_stable" }
            },
            already_married_struggling: { label: "Already Married (Struggling)", brief: "Marriage stressed", icon: "⚠️",
                consequence: { immediate: "Your transition is straining an already challenging marriage.", futureImpacts: ["Divorce risk elevated", "Support vs burden", "Identity changes"] },
                stateChanges: { marriageStatus: "married_struggling" }
            },
            remarrying_postdivorce: { label: "Remarrying Post-Divorce", brief: "Second marriage", icon: "🔄",
                consequence: { immediate: "You're entering a second marriage with lessons learned.", sociologicalLink: { concept: "remarriage", hammondRef: "Ch. 14" }, futureImpacts: ["Blended family issues", "Different expectations", "Prior experience"] },
                stateChanges: { marriageStatus: "remarrying" }
            },
            cohabiting_longterm: { label: "Cohabiting Long-Term", brief: "Committed, not married", icon: "🏠",
                consequence: { immediate: "You're in a committed partnership without legal marriage.", futureImpacts: ["Fewer legal protections", "More flexibility", "May complicate benefits"] },
                stateChanges: { marriageStatus: "cohabiting" }
            }
        },
        m5_marriage_midcareer: {
            longterm_strong: { label: "Long-term Marriage (Strong)", brief: "Weathered storms", icon: "⚓",
                consequence: { immediate: "Your long marriage has grown stronger through challenges.", futureImpacts: ["Deep partnership", "Shared history", "Empty nest opportunity"] },
                stateChanges: { marriageStatus: "married_longterm" }
            },
            longterm_drifted: { label: "Long-term Marriage (Drifted)", brief: "Coexisting, not thriving", icon: "🌫️",
                consequence: { immediate: "You've stayed together but grown apart over the years.", futureImpacts: ["Gray divorce risk", "Reconnection possible", "Identity questions"] },
                stateChanges: { marriageStatus: "married_drifted" }
            },
            postdivorce_new_partnership: { label: "Post-Divorce New Partnership", brief: "Second chance at love", icon: "🌅",
                consequence: { immediate: "After divorce, you've found a new partnership.", futureImpacts: ["Different dynamics", "Blended considerations", "Clearer priorities"] },
                stateChanges: { marriageStatus: "remarried" }
            },
            single_postdivorce: { label: "Single Post-Divorce", brief: "Solo at midlife", icon: "🚶",
                consequence: { immediate: "You're navigating midlife as a single person after divorce.", futureImpacts: ["Independence", "Dating challenges", "Support network key"] },
                stateChanges: { marriageStatus: "single_divorced" }
            }
        },
        m5_marriage_laterlife: {
            decades_marriage_strong: { label: "Decades Marriage (Strong)", brief: "Lifetime partnership", icon: "💎",
                consequence: { immediate: "You and your partner have built a life together over decades.", futureImpacts: ["Deep interdependence", "Caregiving role likely", "Legacy focus"] },
                stateChanges: { marriageStatus: "married_decades" }
            },
            widowhood: { label: "Widowhood", brief: "Lost life partner", icon: "🕊️",
                consequence: { immediate: "You're adapting to life after losing your spouse.", sociologicalLink: { concept: "widowhood", hammondRef: "Ch. 14" }, futureImpacts: ["Grief process", "Identity shift", "Social support needs"] },
                stateChanges: { marriageStatus: "widowed" }
            },
            new_latelife_partnership: { label: "New Late-Life Partnership", brief: "Found love later", icon: "🌹",
                consequence: { immediate: "You've formed a new partnership later in life.", futureImpacts: ["Family reactions", "Estate planning issues", "Companionship focus"] },
                stateChanges: { marriageStatus: "new_partnership" }
            },
            single_by_choice: { label: "Single by Choice", brief: "Independence valued", icon: "🦅",
                consequence: { immediate: "You've chosen to remain single and build other support networks.", futureImpacts: ["Strong friendships key", "Autonomy valued", "Care planning needed"] },
                stateChanges: { marriageStatus: "single_choice" }
            }
        },
        m5_finances_traditional: {
            traditional_merged: { label: "Traditional Merged", brief: "All money shared", icon: "🏦",
                consequence: { immediate: "You merge all finances into joint accounts.", futureImpacts: ["Full transparency", "Power imbalance risk", "Simplicity"] },
                stateChanges: { financeStyle: "merged" }
            },
            egalitarian_dual_career: { label: "Egalitarian Dual-Career", brief: "Both contribute equally", icon: "⚖️",
                consequence: { immediate: "You maintain equal financial contributions and responsibility.", futureImpacts: ["Equal power", "Requires similar incomes", "May feel transactional"] },
                stateChanges: { financeStyle: "egalitarian" }
            },
            semi_autonomous: { label: "Semi-Autonomous", brief: "Yours, mine, ours", icon: "📊",
                consequence: { immediate: "You maintain personal accounts plus a joint account.", futureImpacts: ["Independence preserved", "Complexity", "Negotiation needed"] },
                stateChanges: { financeStyle: "semi_autonomous" }
            }
        },
        m5_finances_returning: {
            strengthen_communication: { label: "Strengthen Communication", brief: "Talk through changes", icon: "💬",
                consequence: { immediate: "You prioritize open dialogue about the transition.", futureImpacts: ["Deeper understanding", "Time investment", "May surface issues"] },
                stateChanges: { relationshipStrategy: "communicate" }
            },
            renegotiate_structure: { label: "Renegotiate Structure", brief: "Change the rules", icon: "📝",
                consequence: { immediate: "You actively renegotiate roles and expectations.", futureImpacts: ["More fair division", "Conflict possible", "Growth opportunity"] },
                stateChanges: { relationshipStrategy: "renegotiate" }
            },
            accept_status_quo: { label: "Accept Status Quo", brief: "Keep things stable", icon: "🔒",
                consequence: { immediate: "You avoid rocking the boat during a stressful time.", futureImpacts: ["Short-term peace", "Resentment risk", "Issues delayed"] },
                stateChanges: { relationshipStrategy: "status_quo" }
            }
        },
        m5_finances_midcareer: {
            reinvest_empty_nest: { label: "Reinvest in Marriage", brief: "Reconnect actively", icon: "💑",
                consequence: { immediate: "You invest time and energy into revitalizing your marriage.", futureImpacts: ["Stronger bond possible", "Requires mutual effort", "Empty nest opportunity"] },
                stateChanges: { relationshipStrategy: "reinvest" }
            },
            accept_companionate: { label: "Accept Companionate", brief: "Good enough", icon: "🤝",
                consequence: { immediate: "You accept a comfortable but less passionate partnership.", futureImpacts: ["Stability", "May miss deeper connection", "Low conflict"] },
                stateChanges: { relationshipStrategy: "companionate" }
            },
            pursue_gray_divorce: { label: "Pursue Gray Divorce", brief: "End it now", icon: "📄",
                consequence: { immediate: "You decide to end the marriage rather than continue.", sociologicalLink: { concept: "gray-divorce", hammondRef: "Ch. 14" }, futureImpacts: ["Financial impact", "Freedom", "Social network changes"] },
                stateChanges: { relationshipStrategy: "divorce" }
            }
        },
        m5_finances_laterlife: {
            caregiving_partnership: { label: "Caregiving Partnership", brief: "Mutual care focus", icon: "❤️‍🩹",
                consequence: { immediate: "Your partnership centers on mutual health and caregiving.", futureImpacts: ["Burden and blessing", "Role changes", "Healthcare navigation"] },
                stateChanges: { relationshipFocus: "caregiving" }
            },
            companionship_active: { label: "Companionship & Activity", brief: "Enjoying life together", icon: "🌴",
                consequence: { immediate: "You focus on enjoying retirement and shared activities.", futureImpacts: ["Quality of life", "Bucket list", "Mutual enjoyment"] },
                stateChanges: { relationshipFocus: "companionship" }
            },
            independent_community: { label: "Independent Community", brief: "Parallel paths", icon: "👥",
                consequence: { immediate: "You each maintain separate interests and friend networks.", futureImpacts: ["Personal fulfillment", "Less togetherness", "Support diversity"] },
                stateChanges: { relationshipFocus: "independent" }
            }
        },

        // ========== MODULE 6: PARENTHOOD/CAREGIVING ==========
        m6_childcare_traditional: {
            dual_career_purchased: { label: "Dual-Career + Daycare", brief: "Both work, pay for care", icon: "👫",
                consequence: { immediate: "You both continue careers and pay for childcare.", sociologicalLink: { concept: "work-family-conflict", hammondRef: "Ch. 11" }, futureImpacts: ["Financial strain", "Career continuity", "Outsourced care"] },
                stateChanges: { childcareStrategy: "purchased" }
            },
            one_exits_career: { label: "One Parent Exits", brief: "Stay-home parent", icon: "🏠",
                consequence: { immediate: "One parent leaves the workforce to provide care.", futureImpacts: ["Income loss", "Career penalty", "Full-time parenting"] },
                stateChanges: { childcareStrategy: "one_home" }
            },
            family_network: { label: "Family Network", brief: "Grandparents help", icon: "👨‍👩‍👧‍👦",
                consequence: { immediate: "Extended family provides regular childcare.", futureImpacts: ["Cost savings", "Obligations created", "Intergenerational ties"] },
                stateChanges: { childcareStrategy: "family" }
            }
        },
        m6_childcare_returning: {
            dual_drowning: { label: "Dual-Career Drowning", brief: "Exhausted, second shift", icon: "😰",
                consequence: { immediate: "You're working the 'second shift'—paid work plus unpaid care work.", sociologicalLink: { concept: "second-shift", hammondRef: "Ch. 12" }, futureImpacts: ["Burnout risk", "Marriage strain", "Career impact"] },
                stateChanges: { childcareStrategy: "dual_drowning" }
            },
            home_trapped: { label: "Home, Feeling Trapped", brief: "Career paused, isolated", icon: "🏠",
                consequence: { immediate: "You're at home but feeling isolated and losing career ground.", futureImpacts: ["Identity loss", "Reentry challenge", "Depression risk"] },
                stateChanges: { childcareStrategy: "home_trapped" }
            },
            family_constrained: { label: "Family Help, Constrained", brief: "Follow their rules", icon: "👴",
                consequence: { immediate: "Family helps but with strings attached—their house, their rules.", futureImpacts: ["Conflict likely", "Boundary issues", "Dependency"] },
                stateChanges: { childcareStrategy: "family_constrained" }
            }
        },
        m6_parenting_midcareer: {
            heavy_involvement: { label: "Heavy Involvement", brief: "Active monitoring, support", icon: "🎯",
                consequence: { immediate: "You stay heavily involved in your teens'/young adults' lives.", futureImpacts: ["Support provided", "Autonomy issues", "Helicopter risk"] },
                stateChanges: { parentingStyle: "involved" }
            },
            promote_autonomy: { label: "Promote Autonomy", brief: "Let them struggle/learn", icon: "🦅",
                consequence: { immediate: "You step back to let your children develop independence.", futureImpacts: ["Growth opportunity", "May feel neglectful", "Natural consequences"] },
                stateChanges: { parentingStyle: "autonomy" }
            },
            financial_boundaries: { label: "Financial Boundaries", brief: "Limited support", icon: "💰",
                consequence: { immediate: "You set clear limits on financial support for adult children.", futureImpacts: ["Self-sufficiency encouraged", "May strain relationship", "Protect retirement"] },
                stateChanges: { parentingStyle: "boundaries" }
            }
        },
        m6_grandparenting_laterlife: {
            active_grandparent: { label: "Active Grandparenting", brief: "Regular childcare", icon: "👶",
                consequence: { immediate: "You provide regular childcare for grandchildren.", futureImpacts: ["Close bonds", "Physical demands", "Schedule constraints"] },
                stateChanges: { grandparentRole: "active" }
            },
            occasional: { label: "Occasional Visits", brief: "Enjoy but independent", icon: "🎁",
                consequence: { immediate: "You enjoy grandchildren but maintain your independence.", futureImpacts: ["Balance achieved", "Less intensive bond", "Own pursuits continue"] },
                stateChanges: { grandparentRole: "occasional" }
            },
            distant: { label: "Distant/Minimal", brief: "Geographic or strained", icon: "✈️",
                consequence: { immediate: "Distance or family tensions limit grandparent involvement.", futureImpacts: ["Less connection", "May feel excluded", "Focus elsewhere"] },
                stateChanges: { grandparentRole: "distant" }
            }
        },
        m6_division_traditional: {
            traditional_gendered: { label: "Traditional Gendered", brief: "Mother does most", icon: "👩‍🍳",
                consequence: { immediate: "Childcare and housework fall primarily to the mother.", sociologicalLink: { concept: "second-shift", hammondRef: "Ch. 12" }, futureImpacts: ["Career penalty for mother", "Father less bonded", "Normative expectation"] },
                stateChanges: { laborDivision: "gendered" }
            },
            egalitarian_50_50: { label: "Egalitarian 50/50", brief: "Split equally", icon: "⚖️",
                consequence: { immediate: "You split childcare and housework equally.", futureImpacts: ["Both careers continue", "Constant negotiation", "Counter-normative"] },
                stateChanges: { laborDivision: "egalitarian" }
            },
            outsource_services: { label: "Outsource Services", brief: "Hire help", icon: "💰",
                consequence: { immediate: "You hire help for cleaning, childcare, and other tasks.", futureImpacts: ["Less couple conflict", "Expensive", "Class privilege"] },
                stateChanges: { laborDivision: "outsourced" }
            }
        },
        m6_division_returning: {
            power_through: { label: "Power Through", brief: "Temporary phase", icon: "💪",
                consequence: { immediate: "You tell yourself this intense phase is temporary.", futureImpacts: ["Burnout risk", "Deferred problems", "May work out"] },
                stateChanges: { copingStrategy: "power_through" }
            },
            renegotiate: { label: "Renegotiate", brief: "Urgent conversation", icon: "💬",
                consequence: { immediate: "You initiate serious conversation about division of labor.", futureImpacts: ["Conflict likely", "Fairer possible", "Relationship test"] },
                stateChanges: { copingStrategy: "renegotiate" }
            },
            major_change: { label: "Major Change", brief: "Someone quits or hire help", icon: "🔄",
                consequence: { immediate: "Something has to give—a job change or hired help.", futureImpacts: ["Structural solution", "Financial impact", "Relief possible"] },
                stateChanges: { copingStrategy: "major_change" }
            }
        },
        m6_launching_midcareer: {
            fund_launch: { label: "Fund Full Launch", brief: "Pay college, apartment", icon: "🎓",
                consequence: { immediate: "You fund your child's education and early independence.", futureImpacts: ["Depletes savings", "Clean launch", "May enable vs support"] },
                stateChanges: { launchingStrategy: "fund" }
            },
            accept_boomerang: { label: "Accept Boomerang", brief: "Adult child lives home", icon: "🏠",
                consequence: { immediate: "Your adult child lives at home while establishing themselves.", sociologicalLink: { concept: "boomerang-generation", hammondRef: "Ch. 13" }, futureImpacts: ["Saves money", "Privacy loss", "Extended dependence"] },
                stateChanges: { launchingStrategy: "boomerang" }
            },
            tough_love: { label: "Tough Love", brief: "Sink or swim", icon: "✊",
                consequence: { immediate: "You set clear boundaries on support for adult children.", futureImpacts: ["Independence forced", "Relationship strain", "Self-sufficiency"] },
                stateChanges: { launchingStrategy: "tough_love" }
            }
        },
        m6_support_laterlife: {
            ongoing_financial: { label: "Ongoing Financial", brief: "Help with housing, emergencies", icon: "💵",
                consequence: { immediate: "You provide ongoing financial support to adult children.", futureImpacts: ["Retirement impacted", "Dependence enabled", "Family safety net"] },
                stateChanges: { adultChildSupport: "financial" }
            },
            emotional_only: { label: "Emotional Only", brief: "Protect retirement", icon: "❤️",
                consequence: { immediate: "You provide emotional support but protect financial boundaries.", futureImpacts: ["Retirement secure", "May feel guilty", "Clear boundaries"] },
                stateChanges: { adultChildSupport: "emotional" }
            },
            prioritize_self: { label: "Prioritize Self", brief: "Focus on retirement/health", icon: "🧘",
                consequence: { immediate: "You focus on your own health and well-being first.", futureImpacts: ["Self-care", "May strain family", "Realistic limits"] },
                stateChanges: { adultChildSupport: "self" }
            }
        },

        // ========== MODULE 7: CRISIS/RESILIENCE ==========
        m7_crisis_traditional: {
            job_loss: { label: "Job Loss", brief: "Laid off, no income", icon: "💼",
                consequence: { immediate: "You or your partner loses a job—income disappears.", futureImpacts: ["Financial stress", "Insurance loss", "Identity crisis"] },
                stateChanges: { crisisType: "job_loss" }
            },
            health_emergency: { label: "Health Emergency", brief: "Serious diagnosis", icon: "🏥",
                consequence: { immediate: "A serious health diagnosis changes everything.", futureImpacts: ["Medical costs", "Caregiving demands", "Priorities shift"] },
                stateChanges: { crisisType: "health" }
            },
            relationship_crisis: { label: "Relationship Crisis", brief: "Partnership breakdown", icon: "💔",
                consequence: { immediate: "Your relationship faces a serious crisis—trust broken.", futureImpacts: ["Separation possible", "Children affected", "Support system tested"] },
                stateChanges: { crisisType: "relationship" }
            }
        },
        m7_crisis_returning: {
            childcare_collapse: { label: "Childcare Collapse", brief: "No backup plan", icon: "👶",
                consequence: { immediate: "Your childcare arrangement falls apart with no backup.", futureImpacts: ["Work impossible", "Emergency scramble", "Career impact"] },
                stateChanges: { crisisType: "childcare" }
            },
            partner_job_loss: { label: "Partner Job Loss", brief: "Single income now", icon: "💼",
                consequence: { immediate: "Your partner loses their job—you're the sole earner.", futureImpacts: ["Pressure intensifies", "Role reversal", "Financial strain"] },
                stateChanges: { crisisType: "partner_job_loss" }
            },
            parent_health: { label: "Parent Health Crisis", brief: "Sandwich generation", icon: "👴",
                consequence: { immediate: "Your parent has a health crisis requiring your care.", sociologicalLink: { concept: "sandwich-generation", hammondRef: "Ch. 13" }, futureImpacts: ["Competing demands", "Work disruption", "Emotional toll"] },
                stateChanges: { crisisType: "parent_health" }
            }
        },
        m7_crisis_midcareer: {
            parent_care_crisis: { label: "Parent Care Crisis", brief: "Can't live alone", icon: "👵",
                consequence: { immediate: "Your parent can no longer live independently.", futureImpacts: ["Move them in?", "Facility costs", "Sibling conflict"] },
                stateChanges: { crisisType: "parent_care" }
            },
            teen_crisis: { label: "Teen Crisis", brief: "Mental health, legal", icon: "🚨",
                consequence: { immediate: "Your teenager faces a serious crisis requiring intervention.", futureImpacts: ["Treatment costs", "Work disruption", "Family stress"] },
                stateChanges: { crisisType: "teen" }
            },
            job_loss_50plus: { label: "Job Loss 50+", brief: "Age discrimination", icon: "📉",
                consequence: { immediate: "You lose your job at 50+ and face age discrimination.", sociologicalLink: { concept: "age-discrimination", hammondRef: "Ch. 13" }, futureImpacts: ["Extended unemployment", "Retirement impacted", "Identity crisis"] },
                stateChanges: { crisisType: "job_loss_50plus" }
            }
        },
        m7_crisis_laterlife: {
            spouse_health: { label: "Spouse Health Crisis", brief: "Become caregiver", icon: "🏥",
                consequence: { immediate: "Your spouse has a serious health crisis.", futureImpacts: ["Caregiver role", "Own health risk", "Life changes"] },
                stateChanges: { crisisType: "spouse_health" }
            },
            adult_child_crisis: { label: "Adult Child Crisis", brief: "Bail them out?", icon: "🆘",
                consequence: { immediate: "Your adult child faces a crisis and needs help.", futureImpacts: ["Retirement drained", "Enable vs help", "Family dynamics"] },
                stateChanges: { crisisType: "adult_child" }
            },
            own_health_decline: { label: "Own Health Decline", brief: "Need assistance", icon: "🩺",
                consequence: { immediate: "Your own health declines—you need help with daily tasks.", futureImpacts: ["Loss of independence", "Care decisions", "End of life planning"] },
                stateChanges: { crisisType: "own_health" }
            }
        },
        m7_response_traditional: {
            rely_savings: { label: "Use Savings", brief: "Weather with resources", icon: "💰",
                consequence: { immediate: "You have savings to weather the crisis.", sociologicalLink: { concept: "cumulative-advantage", hammondRef: "Ch. 3" }, futureImpacts: ["Buffer provided", "Depleted resources", "Privilege visible"] },
                stateChanges: { crisisResponse: "savings", advantageScore: 2 }
            },
            family_support: { label: "Turn to Family", brief: "Family provides support", icon: "👨‍👩‍👧‍👦",
                consequence: { immediate: "Your family of origin provides financial or practical support.", futureImpacts: ["Safety net used", "Obligations created", "Privilege of network"] },
                stateChanges: { crisisResponse: "family", advantageScore: 1 }
            },
            struggle_debt: { label: "Struggle, Debt", brief: "No buffer, devastation", icon: "💳",
                consequence: { immediate: "You have no safety net—crisis means debt and instability.", sociologicalLink: { concept: "cumulative-disadvantage", hammondRef: "Ch. 3" }, futureImpacts: ["Long-term setback", "Stress health impact", "Systemic vulnerability"] },
                stateChanges: { crisisResponse: "struggle", advantageScore: -2 }
            }
        },
        m7_response_returning: {
            one_quits_emergency: { label: "Emergency Career Exit", brief: "Someone quits", icon: "🚪",
                consequence: { immediate: "In crisis, one partner exits the workforce.", futureImpacts: ["Income loss", "Career penalty", "Immediate solution"] },
                stateChanges: { crisisResponse: "career_exit" }
            },
            cobble_together: { label: "Cobble Together", brief: "Patchwork, exhaustion", icon: "🧩",
                consequence: { immediate: "You frantically patch together solutions.", futureImpacts: ["Unsustainable", "Burnout coming", "Temporary fix"] },
                stateChanges: { crisisResponse: "cobble" }
            },
            system_breaks: { label: "System Breaks", brief: "Something gives", icon: "💥",
                consequence: { immediate: "The crisis overwhelms your coping capacity.", futureImpacts: ["Health impact", "Relationship strain", "Breaking point"] },
                stateChanges: { crisisResponse: "system_breaks", advantageScore: -1 }
            }
        },
        m7_response_midcareer: {
            resources_hold: { label: "Resources Hold", brief: "Weather the storm", icon: "🛡️",
                consequence: { immediate: "Your accumulated resources allow you to manage the crisis.", futureImpacts: ["Stability maintained", "Savings depleted", "Resilience demonstrated"] },
                stateChanges: { crisisResponse: "resources", advantageScore: 1 }
            },
            partnership_strain: { label: "Partnership Strain", brief: "Fight or unite?", icon: "⚠️",
                consequence: { immediate: "The crisis either strengthens or breaks your partnership.", futureImpacts: ["Test of relationship", "May grow closer", "May fall apart"] },
                stateChanges: { crisisResponse: "partnership_test" }
            },
            collapse_cascade: { label: "Cascade Collapse", brief: "Everything fails", icon: "🌊",
                consequence: { immediate: "The crisis triggers a cascade of other problems.", futureImpacts: ["Multiple losses", "Overwhelming", "Cumulative disadvantage"] },
                stateChanges: { crisisResponse: "cascade", advantageScore: -2 }
            }
        },
        m7_response_laterlife: {
            strong_network: { label: "Strong Network", brief: "Support provides resilience", icon: "🤝",
                consequence: { immediate: "Your social network provides crucial support.", futureImpacts: ["Resilience", "Not alone", "Reciprocity matters"] },
                stateChanges: { crisisResponse: "network", advantageScore: 1 }
            },
            isolated_struggle: { label: "Isolated Struggle", brief: "Managing alone", icon: "🏝️",
                consequence: { immediate: "You face the crisis largely alone.", futureImpacts: ["Harder recovery", "Depression risk", "Systemic failure"] },
                stateChanges: { crisisResponse: "isolated", advantageScore: -1 }
            },
            adapt_reframe: { label: "Adapt & Reframe", brief: "Resilience through acceptance", icon: "🧘",
                consequence: { immediate: "You adapt expectations and find meaning despite challenges.", futureImpacts: ["Wisdom growth", "Acceptance", "Quality focus"] },
                stateChanges: { crisisResponse: "adapt" }
            }
        },

        // ========== MODULE 8: POLICY & REFLECTION ==========

        // Module 8 Q17 - Reflection on most influential decision (life-stage variants)
        m8_reflection_traditional: {
            mod1_family: { label: "Module 1 Family", brief: "Class, resources, values", icon: "👨‍👩‍👧",
                consequence: { immediate: "You recognize how family background shaped opportunities.", sociologicalLink: { concept: "path-dependency", hammondRef: "Ch. 4" }, futureImpacts: ["Structural awareness", "Intergenerational insight"] },
                stateChanges: { reflectionFocus: "family" }
            },
            mod2_education: { label: "Module 2 Education", brief: "College vs no-college divide", icon: "🎓",
                consequence: { immediate: "Education path created cascading effects.", sociologicalLink: { concept: "cumulative-advantage", hammondRef: "Ch. 3" }, futureImpacts: ["Career trajectory set", "Social network effects"] },
                stateChanges: { reflectionFocus: "education" }
            },
            mod4_partner: { label: "Module 4 Partner", brief: "Who you chose matters", icon: "💑",
                consequence: { immediate: "Partner selection shaped economic and emotional trajectory.", sociologicalLink: { concept: "educational-homogamy", hammondRef: "Ch. 7-8" }, futureImpacts: ["Household resources", "Division of labor"] },
                stateChanges: { reflectionFocus: "partner" }
            }
        },
        m8_reflection_returning: {
            systems_not_individual: { label: "Systems, Not Individual", brief: "Structural policy failure", icon: "🏛️",
                consequence: { immediate: "You see how policies and systems constrained choices.", sociologicalLink: { concept: "family-policy", hammondRef: "Ch. 15" }, futureImpacts: ["Policy advocacy", "Reduced self-blame"] },
                stateChanges: { reflectionFocus: "systems" }
            },
            cumulative_advantage: { label: "Cumulative Advantage", brief: "Early resources compound", icon: "📈",
                consequence: { immediate: "Small advantages/disadvantages compounded over time.", sociologicalLink: { concept: "cumulative-advantage", hammondRef: "Ch. 3" }, futureImpacts: ["Structural understanding", "Intergenerational focus"] },
                stateChanges: { reflectionFocus: "cumulative" }
            },
            gender_inequality: { label: "Gender Inequality", brief: "Structural barriers", icon: "⚖️",
                consequence: { immediate: "Gender shaped opportunities and constraints throughout.", sociologicalLink: { concept: "second-shift", hammondRef: "Ch. 12" }, futureImpacts: ["Feminist perspective", "Work-family lens"] },
                stateChanges: { reflectionFocus: "gender" }
            }
        },
        m8_reflection_midcareer: {
            satisfied_trajectory: { label: "Satisfied", brief: "Choices made sense", icon: "😊",
                consequence: { immediate: "Looking back, your choices aligned with values and context.", futureImpacts: ["Self-acceptance", "Wisdom"] },
                stateChanges: { reflectionFocus: "satisfied" }
            },
            regrets_constraints: { label: "Regrets About Constraints", brief: "Structural barriers limited options", icon: "🚧",
                consequence: { immediate: "You recognize how structural barriers limited options.", sociologicalLink: { concept: "path-dependency", hammondRef: "Ch. 4" }, futureImpacts: ["Structural awareness", "Policy interest"] },
                stateChanges: { reflectionFocus: "regrets_structural" }
            },
            would_redo_major: { label: "Would Redo", brief: "Major decisions", icon: "🔙",
                consequence: { immediate: "Given current knowledge, key decisions would change.", futureImpacts: ["Learning from hindsight", "Generativity focus"] },
                stateChanges: { reflectionFocus: "redo" }
            }
        },
        m8_reflection_laterlife: {
            fulfilling_journey: { label: "Fulfilling Journey", brief: "Meaning, relationships", icon: "✨",
                consequence: { immediate: "Life course brought meaning through relationships and contributions.", sociologicalLink: { concept: "generativity", hammondRef: "Ch. 4" }, futureImpacts: ["Legacy focus", "Gratitude"] },
                stateChanges: { reflectionFocus: "fulfilling" }
            },
            mixed_accepting: { label: "Mixed But Accepting", brief: "Peace with both", icon: "☯️",
                consequence: { immediate: "Both joys and regrets, but acceptance brings peace.", futureImpacts: ["Wisdom", "Balance"] },
                stateChanges: { reflectionFocus: "accepting" }
            },
            regrets_structural: { label: "Structural Awareness", brief: "Class, gender, policy", icon: "🔍",
                consequence: { immediate: "Looking back, you see how structures shaped outcomes.", sociologicalLink: { concept: "cumulative-disadvantage", hammondRef: "Ch. 3" }, futureImpacts: ["Advocacy", "Intergenerational support"] },
                stateChanges: { reflectionFocus: "structural_awareness" }
            }
        },

        // Module 8 Q18 - Systems thinking / forward action (life-stage variants)
        m8_systems_traditional: {
            nothing: { label: "Nothing", brief: "Path makes sense", icon: "✅",
                consequence: { immediate: "Choices aligned with circumstances and values.", futureImpacts: ["Confidence", "Forward momentum"] },
                stateChanges: { systemsThinking: "aligned" }
            },
            career_different: { label: "Different Career", brief: "Education choice", icon: "💼",
                consequence: { immediate: "Education/career path would be reconsidered with more information.", sociologicalLink: { concept: "path-dependency", hammondRef: "Ch. 4" }, futureImpacts: ["Career exploration", "Skill building"] },
                stateChanges: { systemsThinking: "career_rethink" }
            },
            relationship_timing: { label: "Relationship Timing", brief: "Too early/late", icon: "⏰",
                consequence: { immediate: "Relationship timing affected other opportunities.", sociologicalLink: { concept: "marriage-bar", hammondRef: "Ch. 9" }, futureImpacts: ["Timing awareness", "Intentionality"] },
                stateChanges: { systemsThinking: "timing" }
            }
        },
        m8_systems_returning: {
            renegotiate_partnership: { label: "Renegotiate Partnership", brief: "Need changes", icon: "💬",
                consequence: { immediate: "Partnership roles need rebalancing for equity.", sociologicalLink: { concept: "second-shift", hammondRef: "Ch. 12" }, futureImpacts: ["Relationship evolution", "Gender equity"] },
                stateChanges: { systemsThinking: "renegotiate" }
            },
            career_pivot: { label: "Career Pivot", brief: "Work-family balance", icon: "🔄",
                consequence: { immediate: "Career shift needed to better align work and family.", sociologicalLink: { concept: "work-family-conflict", hammondRef: "Ch. 11" }, futureImpacts: ["New skills", "Better fit"] },
                stateChanges: { systemsThinking: "pivot" }
            },
            accept_trade_offs: { label: "Accept Trade-offs", brief: "Make peace with path", icon: "🤝",
                consequence: { immediate: "Acceptance of trade-offs brings clarity and focus.", futureImpacts: ["Self-compassion", "Moving forward"] },
                stateChanges: { systemsThinking: "acceptance" }
            }
        },
        m8_systems_midcareer: {
            empty_nest_reinvest: { label: "Empty Nest Reinvest", brief: "Partner, hobbies, travel", icon: "🔥",
                consequence: { immediate: "With children launched, reinvest in partnership and self.", sociologicalLink: { concept: "generativity", hammondRef: "Ch. 4" }, futureImpacts: ["Relationship renewal", "Personal growth"] },
                stateChanges: { systemsThinking: "reinvest" }
            },
            career_final_push: { label: "Career Final Push", brief: "Maximize earnings", icon: "💼",
                consequence: { immediate: "Focus remaining work years on peak earning and achievement.", futureImpacts: ["Financial security", "Legacy building"] },
                stateChanges: { systemsThinking: "career_push" }
            },
            generativity_focus: { label: "Generativity Focus", brief: "Mentoring, legacy", icon: "🌱",
                consequence: { immediate: "Shift focus to nurturing next generation and leaving legacy.", sociologicalLink: { concept: "generativity", hammondRef: "Ch. 4" }, futureImpacts: ["Meaning", "Contribution"] },
                stateChanges: { systemsThinking: "generativity" }
            }
        },
        m8_systems_laterlife: {
            family_legacy: { label: "Family Legacy", brief: "Children, grandchildren", icon: "👨‍👩‍👧‍👦",
                consequence: { immediate: "Focus on intergenerational support and family continuity.", sociologicalLink: { concept: "intergenerational-transfers", hammondRef: "Ch. 4" }, futureImpacts: ["Family bonds", "Resource transfer"] },
                stateChanges: { systemsThinking: "family_legacy" }
            },
            community_contribution: { label: "Community Contribution", brief: "Volunteer, mentor", icon: "🤝",
                consequence: { immediate: "Contribute to broader community through service and mentoring.", sociologicalLink: { concept: "generativity", hammondRef: "Ch. 4" }, futureImpacts: ["Community ties", "Purpose"] },
                stateChanges: { systemsThinking: "community" }
            },
            personal_contentment: { label: "Personal Contentment", brief: "Focus on wellbeing", icon: "🧘",
                consequence: { immediate: "Prioritize personal health, relationships, and peace.", futureImpacts: ["Self-care", "Quality of life"] },
                stateChanges: { systemsThinking: "contentment" }
            }
        },

        m8_policy: {
            comprehensive_social_democracy: {
                label: "Comprehensive Social Democratic", brief: "Universal family supports", icon: "🏛️",
                consequence: { immediate: "Advocate for European-style universal programs.", sociologicalLink: { concept: "family-policy", hammondRef: "Ch. 15" }, futureImpacts: ["Higher taxes accepted", "Collective responsibility", "Systemic change focus"] },
                stateChanges: { policyStance: "comprehensive" }
            },
            targeted_supports: {
                label: "Targeted Supports", brief: "Help low-income families", icon: "🎯",
                consequence: { immediate: "Advocate for means-tested programs for those most in need.", futureImpacts: ["Focus scarce resources", "Cliff effects concern", "Two-tier system"] },
                stateChanges: { policyStance: "targeted" }
            },
            market_solutions_minimal_government: {
                label: "Market Solutions", brief: "Personal responsibility", icon: "📈",
                consequence: { immediate: "Families should solve problems through markets and individual choices.", futureImpacts: ["Smaller government", "Accepts inequality", "Ignores structural constraints"] },
                stateChanges: { policyStance: "market" }
            },
            marriage_promotion_traditional_values: {
                label: "Marriage Promotion", brief: "Traditional family values", icon: "💒",
                consequence: { immediate: "Programs encouraging marriage as solution to instability.", sociologicalLink: { concept: "marriage-promotion", hammondRef: "Ch. 15" }, futureImpacts: ["Two-parent focus", "Ignores marriage bar", "Stigmatizes alternatives"] },
                stateChanges: { policyStance: "marriage_promotion" }
            }
        }
    },

    // Sociological concepts dictionary
    concepts: {
        // Family Structure & Origins
        "nuclear-family": { term: "Nuclear Family", definition: "Two parents and children in one household.", hammondRef: "Ch. 1" },
        "extended-family": { term: "Extended Family", definition: "Multiple generations living together with shared resources.", hammondRef: "Ch. 1" },
        "chosen-family": { term: "Chosen Family", definition: "Non-biological 'kin' providing family-like support.", hammondRef: "Ch. 1" },
        "family-of-origin": { term: "Family of Origin", definition: "The family you grew up in that shaped your beliefs, patterns, and expectations about relationships.", hammondRef: "Ch. 1" },
        "socialization": { term: "Socialization", definition: "The lifelong process of learning norms, values, and behaviors from family, peers, and institutions.", hammondRef: "Ch. 2-3" },

        // Partner Selection & Marriage
        "educational-homogamy": { term: "Educational Homogamy", definition: "Tendency to marry partners with similar education levels.", hammondRef: "Ch. 7-8" },
        "marriage-bar": { term: "Marriage Bar", definition: "Economic prerequisites (stable job, savings) before marriage is considered viable.", hammondRef: "Ch. 9" },
        "cohabitation": { term: "Cohabitation", definition: "Living together without marriage—testing compatibility or alternative to marriage.", hammondRef: "Ch. 8" },
        "remarriage": { term: "Remarriage", definition: "Marrying again after divorce or widowhood, often with different expectations.", hammondRef: "Ch. 14" },
        "gray-divorce": { term: "Gray Divorce", definition: "Divorce among couples over 50, increasingly common as lifespans extend.", hammondRef: "Ch. 14" },
        "widowhood": { term: "Widowhood", definition: "Status and experience of losing a spouse, with gendered impacts.", hammondRef: "Ch. 14" },

        // Work-Family Dynamics
        "second-shift": { term: "Second Shift", definition: "Unpaid domestic labor performed after paid work, disproportionately by women.", hammondRef: "Ch. 12" },
        "work-family-conflict": { term: "Work-Family Conflict", definition: "Tension when work demands interfere with family responsibilities and vice versa.", hammondRef: "Ch. 11" },
        "emotional-labor": { term: "Emotional Labor", definition: "Invisible work of managing relationships, remembering, and maintaining social ties.", hammondRef: "Ch. 6" },
        "golden-handcuffs": { term: "Golden Handcuffs", definition: "High salary that traps workers in unfulfilling jobs due to financial obligations.", hammondRef: "Ch. 4" },
        "opting-out": { term: "Opting Out", definition: "Leaving workforce (often women) for caregiving, with significant career penalties.", hammondRef: "Ch. 4" },
        "gender-dynamics": { term: "Gender Dynamics", definition: "How gender shapes power, decisions, and labor division in relationships.", hammondRef: "Ch. 4" },
        "occupational-segregation": { term: "Occupational Segregation", definition: "Concentration of genders in certain fields (nursing vs. construction).", hammondRef: "Ch. 4" },
        "care-work": { term: "Care Work", definition: "Undervalued labor of caring for children, elderly, and dependents.", hammondRef: "Ch. 4" },

        // Life Course
        "path-dependency": { term: "Path Dependency", definition: "How early decisions create constraints that shape later options.", hammondRef: "Ch. 4" },
        "emerging-adulthood": { term: "Emerging Adulthood", definition: "Extended identity exploration period (18-29) before full adult commitments.", hammondRef: "Ch. 4" },
        "sandwich-generation": { term: "Sandwich Generation", definition: "Adults simultaneously caring for children AND aging parents.", hammondRef: "Ch. 13" },
        "boomerang-generation": { term: "Boomerang Generation", definition: "Adult children returning to live with parents due to economic pressures.", hammondRef: "Ch. 13" },
        "generativity": { term: "Generativity", definition: "Midlife/later focus on contributing to future generations and leaving legacy.", hammondRef: "Ch. 4" },
        "time-poverty": { term: "Time Poverty", definition: "When 24 hours becomes insufficient to meet competing role demands.", hammondRef: "Ch. 4" },

        // Intergenerational
        "intergenerational-transfers": { term: "Intergenerational Transfers", definition: "Resources (money, time, housing) flowing between generations.", hammondRef: "Ch. 4" },
        "gendered-eldercare": { term: "Gendered Eldercare", definition: "Daughters disproportionately provide care for aging parents.", hammondRef: "Ch. 4" },

        // Social Networks
        "social-capital": { term: "Social Capital", definition: "Resources available through social networks—connections that provide information, support, and opportunities.", hammondRef: "Ch. 4" },

        // Inequality & Stratification
        "cumulative-advantage": { term: "Cumulative Advantage", definition: "Early advantages compound over time—the rich get richer.", hammondRef: "Ch. 3" },
        "cumulative-disadvantage": { term: "Cumulative Disadvantage", definition: "Early disadvantages compound—setbacks cascade into larger problems.", hammondRef: "Ch. 3" },
        "age-discrimination": { term: "Age Discrimination", definition: "Bias against older workers in hiring, promotion, and retention.", hammondRef: "Ch. 13" },

        // Crisis & Policy
        "abc-x-model": { term: "ABC-X Model", definition: "A (stressor) + B (resources) + C (perception) = X (crisis level).", hammondRef: "Ch. 13" },
        "family-policy": { term: "Family Policy", definition: "Government programs affecting families—childcare, leave, healthcare.", hammondRef: "Ch. 15" },
        "marriage-promotion": { term: "Marriage Promotion", definition: "Policies encouraging marriage as solution to poverty and instability.", hammondRef: "Ch. 15" }
    },

    // Connection rules for branching based on previous choices
    connections: {
        "m1_to_m2": {
            "coreValue_economic": { highlightChoices: ["bachelor", "tech"], note: "Economic focus suggests higher-paying paths." },
            "coreValue_relationships": { highlightChoices: ["education", "associate"], note: "Relationship focus suggests flexible schedules." },
            "familyBackground_single_parent": { modifyAdvantageScore: -1, note: "Resource constraints shape options." }
        },
        "m2_to_m4": {
            "educationLevel_bachelor": { note: "College education affects marriage market position." },
            "educationLevel_highschool": { note: "Without credentials, may face marriage bar." }
        }
    },

    // ========== EXERCISE SYSTEM ==========
    // Six exercise types: ranking, calculator, quiz, reflection, mapping, scenario
    exercises: {
        // MODULE 1 EXERCISES - Character Creation & Family Origins
        m1_ex1_genogram: {
            id: "m1_ex1_genogram",
            type: "mapping",
            section: "PRE_DECISION_EXERCISE",
            title: "Family Genogram",
            instructions: "Create a visual map of your family of origin. Add family members and mark the types of relationships between them. This helps you see patterns that shaped your development.",
            nodeTypes: [
                { id: "self", label: "You", color: "#4a90d9", icon: "⭐" },
                { id: "parent", label: "Parent/Guardian", color: "#50c878", icon: "👤" },
                { id: "sibling", label: "Sibling", color: "#9b59b6", icon: "👥" },
                { id: "grandparent", label: "Grandparent", color: "#f39c12", icon: "👴" },
                { id: "extended", label: "Extended Family", color: "#e74c3c", icon: "👨‍👩‍👧" },
                { id: "chosen", label: "Chosen Family", color: "#1abc9c", icon: "🤝" }
            ],
            connectionTypes: [
                { id: "close", label: "Close/Supportive", color: "#27ae60", style: "solid" },
                { id: "distant", label: "Distant", color: "#95a5a6", style: "dashed" },
                { id: "conflict", label: "Conflict/Tension", color: "#e74c3c", style: "dotted" },
                { id: "cutoff", label: "Cut Off", color: "#2c3e50", style: "none" }
            ],
            prompts: [
                "Who raised you? Add them first.",
                "Did you have siblings? What were those relationships like?",
                "Were grandparents or extended family involved in your upbringing?",
                "Were there 'chosen family' members - non-relatives who played family roles?"
            ],
            metrics: [
                { id: "family_size", label: "Family Network Size", formula: "nodes.length", format: "number" },
                { id: "close_ties", label: "Close Relationships", formula: "connections.filter(c => c.type === 'close').length", format: "number" },
                { id: "conflict_ties", label: "Conflicted Relationships", formula: "connections.filter(c => c.type === 'conflict').length", format: "number" }
            ],
            sociologyLink: {
                concept: "family-of-origin",
                hammondRef: "Ch. 1",
                explanation: "Your family of origin shapes your 'family schema' - your internalized beliefs about what families should look like and how they should function."
            },
            maxNodes: 15,
            required: false,
            skippable: true
        },

        m1_ex2_values_sort: {
            id: "m1_ex2_values_sort",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Life Values Card Sort",
            instructions: "Rank these life values from most important (top) to least important (bottom). There are no wrong answers - this reflects your priorities shaped by your upbringing and experiences.",
            items: [
                { id: "financial_security", label: "Financial Security", description: "Having stable income and savings" },
                { id: "family_closeness", label: "Family Closeness", description: "Strong bonds with family members" },
                { id: "career_success", label: "Career Achievement", description: "Professional advancement and recognition" },
                { id: "personal_freedom", label: "Personal Freedom", description: "Independence and autonomy" },
                { id: "community_service", label: "Helping Others", description: "Contributing to community/society" },
                { id: "romantic_partnership", label: "Romantic Partnership", description: "Finding/maintaining love relationship" },
                { id: "health_wellness", label: "Health & Wellness", description: "Physical and mental wellbeing" },
                { id: "education_learning", label: "Lifelong Learning", description: "Continuous growth and education" }
            ],
            sociologyLink: {
                concept: "socialization",
                hammondRef: "Ch. 2-3",
                explanation: "Values aren't purely individual - they're shaped by family socialization, social class, culture, and historical context. Your ranking reflects both personal preference AND structural influences."
            },
            narrativeFlags: {
                top1: "primary_value",
                top3: "core_values",
                bottom1: "lowest_priority"
            },
            required: false,
            skippable: true
        },

        m1_ex3_quiz: {
            id: "m1_ex3_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Family Diversity Check",
            instructions: "Test your understanding of how sociologists think about family.",
            questions: [
                {
                    id: "q1",
                    question: "According to Hammond, why do sociologists avoid defining one 'correct' family structure?",
                    options: [
                        { id: "a", text: "Because all family structures produce identical outcomes" },
                        { id: "b", text: "Because family forms vary by culture, time period, and social context", correct: true },
                        { id: "c", text: "Because the government prohibits such definitions" },
                        { id: "d", text: "Because sociologists can't agree on anything" }
                    ],
                    explanation: "Hammond Ch. 1 emphasizes that 'family' is a social construction that varies dramatically across cultures and historical periods. The nuclear family norm is relatively recent and culturally specific.",
                    hammondRef: "Ch. 1, p. 5-12"
                },
                {
                    id: "q2",
                    question: "What does 'family of origin' refer to in life course sociology?",
                    options: [
                        { id: "a", text: "The family you create through marriage or partnership" },
                        { id: "b", text: "Your ancestors from previous generations" },
                        { id: "c", text: "The family you grew up in that shaped your development", correct: true },
                        { id: "d", text: "Your biological relatives only" }
                    ],
                    explanation: "Your family of origin is the family context in which you were raised. It shapes your expectations, communication patterns, and beliefs about relationships - regardless of biological connection.",
                    hammondRef: "Ch. 1"
                }
            ],
            passingScore: 50,
            maxAttempts: 3,
            showExplanations: true
        },

        m1_ex4_reflection: {
            id: "m1_ex4_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Family Influences Reflection",
            prompt: "Think about one specific way your family of origin shaped who you are today. This could be a value they taught you, a pattern you learned, or a belief about relationships. How does this influence show up in your life now?",
            minLength: 100,
            maxLength: 2000,
            placeholder: "Consider: What did you learn about money, work, relationships, or conflict from your family? What family patterns do you want to continue or change?",
            tags: ["family-of-origin", "socialization", "values", "patterns"],
            journalEntry: true,
            sociologyLink: {
                concept: "socialization",
                hammondRef: "Ch. 2-3",
                explanation: "Socialization is the lifelong process of learning norms, values, and behaviors. Family is the primary agent of socialization in childhood."
            },
            required: false,
            skippable: true
        },

        m1_ex5_scenario: {
            id: "m1_ex5_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "The Family Gathering",
            setup: "It's a holiday gathering with your family of origin. A relative makes a comment criticizing your life choices - maybe about your career, relationship status, or lifestyle. This touches on values you ranked as important. How do you respond?",
            branches: [
                {
                    id: "defend",
                    label: "Defend Your Choices",
                    description: "Explain why your path is valid and important to you",
                    consequence: "You assert your independence, but tension rises. Some family members seem hurt that you're 'different.'",
                    advantageChange: 0,
                    narrativeFlag: "asserts_independence",
                    sociologyLink: {
                        concept: "agency",
                        hammondRef: "Ch. 1",
                        explanation: "Individual agency - making choices that differ from family expectations - is constrained but not eliminated by structure."
                    }
                },
                {
                    id: "deflect",
                    label: "Change the Subject",
                    description: "Redirect to safer topics to keep the peace",
                    consequence: "The gathering stays pleasant, but you feel unseen. Your choices remain unvalidated by family.",
                    advantageChange: 0,
                    narrativeFlag: "keeps_peace",
                    sociologyLink: {
                        concept: "emotional-labor",
                        hammondRef: "Ch. 6",
                        explanation: "Managing family emotions and avoiding conflict is emotional labor - often invisible work of maintaining relationships."
                    }
                },
                {
                    id: "engage",
                    label: "Ask Questions Back",
                    description: "Try to understand their perspective and share yours",
                    consequence: "The conversation deepens. Some understanding emerges, though full agreement doesn't. You've modeled healthy communication.",
                    advantageChange: 1,
                    narrativeFlag: "bridges_difference",
                    sociologyLink: {
                        concept: "communication",
                        hammondRef: "Ch. 6",
                        explanation: "Constructive conflict - engaging with differences rather than avoiding or escalating - builds relationship resilience."
                    }
                },
                {
                    id: "withdraw",
                    label: "Excuse Yourself",
                    description: "Step away to avoid escalation",
                    consequence: "You protect your peace but feel disconnected. Later, you wonder if there was another way.",
                    advantageChange: 0,
                    narrativeFlag: "self_protective",
                    sociologyLink: {
                        concept: "boundaries",
                        hammondRef: "Ch. 5",
                        explanation: "Setting boundaries is healthy, but can also limit opportunities for relationship repair and growth."
                    }
                }
            ],
            defaultAdvantage: 0
        },

        // MODULE 2 EXERCISES
        m2_ex1_ranking: {
            id: "m2_ex1_ranking",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Career Priority Ranking",
            instructions: "Drag to rank these career values from most important (top) to least important (bottom). Your ranking will influence how we personalize the module's narrative.",
            items: [
                { id: "income", label: "Income Potential", description: "High earnings and financial security" },
                { id: "flexibility", label: "Work Flexibility", description: "Control over schedule and location" },
                { id: "meaning", label: "Meaningful Work", description: "Purpose-driven, helping others" },
                { id: "security", label: "Job Security", description: "Stable employment, low layoff risk" },
                { id: "growth", label: "Growth Potential", description: "Advancement and skill development" }
            ],
            sociologyLink: {
                concept: "path-dependency",
                hammondRef: "Ch. 4",
                explanation: "Your career priorities create path dependency - early choices about what matters constrain later options."
            },
            narrativeHooks: {
                income: "Your priority on income will shape how you weigh education debt against earning potential.",
                flexibility: "Valuing flexibility suggests work-family balance will be central to your decisions.",
                meaning: "Prioritizing meaning may lead to lower-paid but purpose-driven career paths.",
                security: "Job security focus connects to risk tolerance in education and career decisions.",
                growth: "Growth priority suggests willingness to invest in education and skills."
            },
            required: false,
            skippable: true,
            skipWarning: "Skipping this exercise means we'll use default values, which may make the module feel less personalized."
        },

        m2_ex2_calculator: {
            id: "m2_ex2_calculator",
            type: "calculator",
            section: "PRE_DECISION_EXERCISE",
            title: "Education ROI Calculator",
            instructions: "Enter your estimates to see the financial implications of different education paths. All numbers are approximations for learning purposes.",
            inputs: [
                { id: "tuition_annual", label: "Annual Tuition Cost", type: "currency", default: 12000, min: 0, max: 80000, step: 500 },
                { id: "years", label: "Years of Study", type: "number", default: 4, min: 1, max: 8, step: 1 },
                { id: "living_costs", label: "Monthly Living Costs", type: "currency", default: 1500, min: 500, max: 5000, step: 100 },
                { id: "work_hours", label: "Work Hours/Week During School", type: "number", default: 15, min: 0, max: 40, step: 5 },
                { id: "hourly_wage", label: "Current/Potential Hourly Wage", type: "currency", default: 15, min: 10, max: 50, step: 1 },
                { id: "post_grad_salary", label: "Expected Post-Graduation Salary", type: "currency", default: 50000, min: 25000, max: 150000, step: 1000 }
            ],
            formulas: {
                total_tuition: "tuition_annual * years",
                total_living: "living_costs * 12 * years",
                work_income: "work_hours * hourly_wage * 48 * years",
                total_debt: "total_tuition + total_living - work_income",
                opportunity_cost: "(40 - work_hours) * hourly_wage * 48 * years",
                break_even_years: "Math.max(0, total_debt) / (post_grad_salary - (hourly_wage * 2080))"
            },
            outputs: [
                { id: "total_debt", label: "Estimated Total Debt", format: "currency", highlight: true },
                { id: "opportunity_cost", label: "Opportunity Cost (Lost Wages)", format: "currency" },
                { id: "break_even_years", label: "Years to Break Even", format: "decimal", decimals: 1 }
            ],
            interpretations: [
                { condition: "total_debt > 50000", message: "High debt warning: Debt over $50K significantly constrains future choices - delaying home purchase, family formation, and limiting career flexibility.", type: "warning" },
                { condition: "total_debt > 30000 && total_debt <= 50000", message: "Moderate debt level: Manageable but requires consistent income. Consider income-driven repayment options.", type: "info" },
                { condition: "break_even_years > 10", message: "Long payback period: It will take over 10 years to recoup this investment financially. Non-financial returns (fulfillment, credentials) may justify this.", type: "warning" },
                { condition: "break_even_years <= 5", message: "Quick payback: This education investment pays off relatively quickly in pure financial terms.", type: "success" }
            ],
            sociologyLink: {
                concept: "cumulative-advantage",
                hammondRef: "Ch. 3",
                explanation: "Those who start with resources (family help, no debt) have more options. Debt creates constraints that compound over time."
            },
            required: false,
            skippable: true
        },

        m2_ex3_quiz: {
            id: "m2_ex3_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Path Dependency Check",
            instructions: "Test your understanding of how early decisions shape later options. You'll get detailed explanations after each question.",
            questions: [
                {
                    id: "q1",
                    question: "According to the life course perspective, why might taking out student loans at 22 affect someone's ability to have children at 32?",
                    options: [
                        { id: "a", text: "Loans directly prevent pregnancy" },
                        { id: "b", text: "Debt constrains housing, savings, and perceived readiness for parenthood", correct: true },
                        { id: "c", text: "Educated people don't want children" },
                        { id: "d", text: "There is no connection between education debt and family formation" }
                    ],
                    explanation: "Path dependency shows how decisions cascade. Student debt affects monthly cash flow, delays home purchases, and shapes perceptions of 'readiness' for parenthood. Research shows education debt correlates with delayed marriage and childbearing (Hammond Ch. 4).",
                    hammondRef: "Ch. 4, pp. 87-92"
                },
                {
                    id: "q2",
                    question: "What does 'cumulative advantage' mean in the context of education and career?",
                    options: [
                        { id: "a", text: "Everyone gets the same opportunities if they work hard" },
                        { id: "b", text: "Early advantages compound over time, creating larger gaps", correct: true },
                        { id: "c", text: "Disadvantages can be overcome through individual effort" },
                        { id: "d", text: "Education is the only factor that matters for career success" }
                    ],
                    explanation: "Cumulative advantage describes how small initial differences (family resources, early education access, social capital) compound over time. A child with college-educated parents has more help navigating applications, financial safety nets, and professional networks - advantages that multiply across the life course.",
                    hammondRef: "Ch. 3, pp. 58-64"
                }
            ],
            passingScore: 0.5,
            maxAttempts: 3,
            showAnswersAfterFail: true,
            required: true
        },

        m2_ex4_reflection: {
            id: "m2_ex4_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Personal Connection",
            prompt: "How have structural factors (family resources, geography, economic conditions, social networks) shaped your own education and career decisions? Think beyond individual 'choices' to the constraints and opportunities you've experienced.",
            minLength: 100,
            maxLength: 2000,
            placeholder: "Consider: What options were available to you? What was never really an option? How did family resources or lack thereof affect your path? What structural factors (not just individual choices) shaped where you are now?",
            tags: ["education", "structure", "constraints", "personal"],
            journalEntry: true,
            sociologyLink: {
                concept: "path-dependency",
                hammondRef: "Ch. 4",
                explanation: "Connecting personal biography to structural forces is the core of sociological imagination."
            },
            required: false,
            skippable: true
        },

        m2_ex5_mapping: {
            id: "m2_ex5_mapping",
            type: "mapping",
            section: "PRE_DECISION_EXERCISE",
            title: "Support Network Map",
            instructions: "Build a visual map of people who could support you through education/career decisions. This helps identify resources and gaps.",
            nodeTypes: [
                { id: "family", label: "Family Member", color: "#e74c3c", icon: "👨‍👩‍👧" },
                { id: "friend", label: "Friend", color: "#3498db", icon: "👥" },
                { id: "mentor", label: "Mentor/Advisor", color: "#9b59b6", icon: "🎓" },
                { id: "professional", label: "Professional Contact", color: "#27ae60", icon: "💼" }
            ],
            connectionTypes: [
                { id: "strong", label: "Strong Support", style: "solid", width: 3 },
                { id: "moderate", label: "Moderate Support", style: "solid", width: 2 },
                { id: "weak", label: "Weak/Potential", style: "dashed", width: 1 },
                { id: "tension", label: "Tension/Complicated", style: "dotted", width: 2, color: "#e74c3c" }
            ],
            metrics: [
                { id: "network_size", label: "Network Size", formula: "nodes.length" },
                { id: "support_density", label: "Support Density", formula: "(connections.filter(c => c.type !== 'tension').length / nodes.length) * 100", format: "percent" },
                { id: "diversity", label: "Network Diversity", formula: "new Set(nodes.map(n => n.type)).size / 4 * 100", format: "percent" }
            ],
            sociologyLink: {
                concept: "social-capital",
                hammondRef: "Ch. 4",
                explanation: "Social capital - your networks and relationships - significantly affects what opportunities you can access and what support you have during transitions."
            },
            maxNodes: 15,
            required: false,
            skippable: true
        },

        m2_ex6_scenario: {
            id: "m2_ex6_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "Career vs. Relationship Crossroads",
            setup: "Your employer offers to pay for your master's degree if you commit to staying 3 more years. But your partner has been offered their dream job in another city. You can't do both. This is a classic 'tied mover' dilemma.",
            branches: [
                {
                    id: "take_offer",
                    label: "Take Employer's Offer",
                    brief: "Stay, get degree, partner goes alone or stays",
                    narrative: "You accept the employer's offer. Your partner must decide whether to decline their opportunity or attempt long-distance. Research shows 'tied stayers' (usually women) sacrifice career for partner's job, while 'tied movers' relocate for partner. Either way, someone's career is constrained.",
                    consequences: {
                        advantageScore: 1,
                        narrativeFlags: ["chose_career_over_relocation", "tied_stayer_dynamic"]
                    },
                    sociologyLink: {
                        concept: "gender-dynamics",
                        hammondRef: "Ch. 4",
                        explanation: "The 'two-body problem' is highly gendered. Women are more likely to be tied movers/stayers, sacrificing career for partner's job."
                    }
                },
                {
                    id: "relocate",
                    label: "Relocate with Partner",
                    brief: "Decline offer, move for partner's job",
                    narrative: "You relocate for your partner's opportunity. You'll need to find new employment and education options in the new location. This is the 'tied mover' experience - your career trajectory is now shaped by your partner's opportunity.",
                    consequences: {
                        advantageScore: -1,
                        narrativeFlags: ["tied_mover", "career_disruption"]
                    },
                    sociologyLink: {
                        concept: "gender-dynamics",
                        hammondRef: "Ch. 4",
                        explanation: "Tied movers often experience career setbacks - loss of seniority, network disruption, and starting over in a new job market."
                    }
                },
                {
                    id: "negotiate",
                    label: "Negotiate Remote/Hybrid",
                    brief: "Try to keep both opportunities",
                    narrative: "You attempt to negotiate remote work or a hybrid arrangement. This option depends heavily on your employer's flexibility and the nature of your work. Success requires workplace policies that support flexibility - not available to everyone.",
                    consequences: {
                        advantageScore: 0,
                        narrativeFlags: ["negotiated_flexibility", "class_privilege_option"]
                    },
                    sociologyLink: {
                        concept: "occupational-segregation",
                        hammondRef: "Ch. 4",
                        explanation: "Remote work flexibility is a class privilege - available mainly in knowledge work, not service, healthcare, or trades."
                    }
                },
                {
                    id: "decline_both",
                    label: "Decline Both",
                    brief: "Maintain current situation",
                    narrative: "You and your partner both decline the offers to preserve your current life together. You avoid disruption but may wonder about missed opportunities. Sometimes stability is the right choice - but it's still shaped by structural constraints.",
                    consequences: {
                        advantageScore: 0,
                        narrativeFlags: ["chose_stability", "opportunity_cost"]
                    },
                    sociologyLink: {
                        concept: "path-dependency",
                        hammondRef: "Ch. 4",
                        explanation: "Not choosing is also a choice with path-dependent consequences. Missed opportunities shape future options."
                    }
                }
            ],
            required: true
        },

        // MODULE 3 EXERCISES: Relationships & Communication
        m3_ex1_ranking: {
            id: "m3_ex1_ranking",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Relationship Priorities",
            instructions: "Rank what matters most to you in a romantic relationship. Your ranking helps personalize this module's content.",
            items: [
                { id: "emotional_intimacy", label: "Emotional Intimacy", description: "Deep sharing, vulnerability, feeling understood" },
                { id: "physical_attraction", label: "Physical Attraction", description: "Chemistry, passion, physical connection" },
                { id: "shared_values", label: "Shared Values", description: "Agreement on religion, politics, life goals" },
                { id: "financial_stability", label: "Financial Stability", description: "Partner's economic security and responsibility" },
                { id: "communication", label: "Communication", description: "Ability to discuss issues openly and resolve conflict" }
            ],
            sociologyLink: {
                concept: "educational-homogamy",
                hammondRef: "Ch. 7",
                explanation: "What we prioritize in partners reflects both personal preferences AND structural position. Research shows people systematically marry similar others (homogamy) - our 'preferences' are shaped by our social location."
            },
            narrativeHooks: {
                emotional_intimacy: "Prioritizing emotional intimacy suggests you value deep connection over practical considerations.",
                physical_attraction: "Physical attraction as top priority reflects the romantic love ideology that dominates Western culture.",
                shared_values: "Valuing shared values suggests a practical approach to long-term compatibility.",
                financial_stability: "Prioritizing financial stability connects to the 'marriage bar' - economic prerequisites for partnership.",
                communication: "Communication focus suggests awareness of relationship maintenance work."
            },
            required: false,
            skippable: true
        },

        m3_ex2_quiz: {
            id: "m3_ex2_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Attachment & Communication Check",
            instructions: "Test your understanding of relationship sociology concepts.",
            questions: [
                {
                    id: "q1",
                    question: "What is 'emotional labor' in relationships according to sociologists?",
                    options: [
                        { id: "a", text: "Having difficult emotional conversations" },
                        { id: "b", text: "The invisible work of managing relationships, remembering, and maintaining social ties", correct: true },
                        { id: "c", text: "Working a job that requires emotional expression" },
                        { id: "d", text: "Feeling exhausted after arguments" }
                    ],
                    explanation: "Emotional labor refers to the ongoing, often invisible work of relationship maintenance - remembering birthdays, planning social events, noticing when something is wrong, initiating difficult conversations. Research shows this labor is disproportionately performed by women, even in 'equal' partnerships.",
                    hammondRef: "Ch. 6, pp. 142-148"
                },
                {
                    id: "q2",
                    question: "According to Gottman's research, which communication pattern most strongly predicts relationship failure?",
                    options: [
                        { id: "a", text: "Frequent disagreements" },
                        { id: "b", text: "Different communication styles" },
                        { id: "c", text: "Contempt - treating partner with disrespect and superiority", correct: true },
                        { id: "d", text: "Avoiding conflict entirely" }
                    ],
                    explanation: "Gottman's 'Four Horsemen' research found that contempt is the strongest predictor of divorce. Contempt communicates disgust and superiority, making the partner feel worthless. Healthy relationships can have conflict - it's HOW couples fight that matters.",
                    hammondRef: "Ch. 6, pp. 156-162"
                }
            ],
            passingScore: 0.5,
            maxAttempts: 3,
            showAnswersAfterFail: true,
            required: true
        },

        m3_ex3_reflection: {
            id: "m3_ex3_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Communication Patterns Reflection",
            prompt: "Think about communication patterns you observed growing up. How did adults in your family handle conflict? How might those patterns influence your own relationship communication style?",
            minLength: 100,
            maxLength: 2000,
            placeholder: "Consider: Did adults in your family argue openly or avoid conflict? Were emotions expressed or suppressed? Who did the emotional labor of maintaining relationships? How have these patterns shown up in your own relationships?",
            tags: ["communication", "family-of-origin", "patterns", "emotional-labor"],
            journalEntry: true,
            sociologyLink: {
                concept: "emotional-labor",
                hammondRef: "Ch. 6",
                explanation: "We learn relationship patterns in our families of origin. These patterns feel 'natural' but are actually socially learned."
            },
            required: false,
            skippable: true
        },

        m3_ex4_scenario: {
            id: "m3_ex4_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "The Conflict Crossroads",
            setup: "Your partner just got a significant promotion that requires relocating across the country. They're excited and assumed you'd be happy to move. You have a stable job and close friendships here. They didn't consult you before accepting. How do you handle this conversation?",
            branches: [
                {
                    id: "direct_confrontation",
                    label: "Direct Confrontation",
                    brief: "Express hurt immediately and firmly",
                    narrative: "You tell your partner directly that you're hurt they made this decision without consulting you. The conversation is difficult but honest. Your partner apologizes for the unilateral decision. You work together to evaluate options - but the underlying issue about decision-making in your relationship surfaces.",
                    consequences: {
                        advantageScore: 0,
                        narrativeFlags: ["direct_communicator", "addressed_power_dynamic"]
                    },
                    sociologyLink: {
                        concept: "emotional-labor",
                        hammondRef: "Ch. 6",
                        explanation: "Direct communication can address power imbalances, but often the person with less structural power (frequently women) must do the work of initiating difficult conversations."
                    }
                },
                {
                    id: "accommodating",
                    label: "Accommodate Their Needs",
                    brief: "Agree to move, suppress concerns",
                    narrative: "You agree to move, telling yourself it will be fine. You suppress your concerns to avoid conflict. Your partner is relieved. But research shows suppressed resentment compounds - this decision will resurface later in your relationship.",
                    consequences: {
                        advantageScore: -1,
                        narrativeFlags: ["conflict_avoidant", "suppressed_needs", "tied_mover"]
                    },
                    sociologyLink: {
                        concept: "gender-dynamics",
                        hammondRef: "Ch. 6",
                        explanation: "Accommodation is gendered - women are socialized to prioritize relationship harmony over personal needs. This pattern enables inequality."
                    }
                },
                {
                    id: "negotiate_compromise",
                    label: "Negotiate a Compromise",
                    brief: "Propose alternatives together",
                    narrative: "You express concern but focus on finding middle ground - maybe a delayed start date, trying long-distance first, or negotiating remote work. This approach requires both partners to have relatively equal power and willingness to compromise.",
                    consequences: {
                        advantageScore: 1,
                        narrativeFlags: ["negotiator", "egalitarian_approach"]
                    },
                    sociologyLink: {
                        concept: "gender-dynamics",
                        hammondRef: "Ch. 6",
                        explanation: "True negotiation requires structural equality. When one partner has more resources or power, 'compromise' often means the less powerful partner gives more."
                    }
                },
                {
                    id: "ultimatum",
                    label: "Draw a Hard Line",
                    brief: "Refuse to move, period",
                    narrative: "You tell your partner you won't move and they need to decline or choose between you and the job. This creates immediate crisis. The relationship may not survive - but neither would a pattern of unilateral decisions continue.",
                    consequences: {
                        advantageScore: 0,
                        narrativeFlags: ["boundary_setter", "relationship_crisis"]
                    },
                    sociologyLink: {
                        concept: "path-dependency",
                        hammondRef: "Ch. 4",
                        explanation: "Sometimes setting firm boundaries ends relationships that would have been unsatisfying anyway. Not all relationship preservation is healthy."
                    }
                }
            ],
            required: true
        },

        m3_ex5_mapping: {
            id: "m3_ex5_mapping",
            type: "mapping",
            section: "PRE_DECISION_EXERCISE",
            title: "Relationship History Map",
            instructions: "Map significant relationships in your life - romantic and otherwise. This helps visualize patterns in how you connect with others.",
            nodeTypes: [
                { id: "romantic", label: "Romantic Partner", color: "#e74c3c", icon: "❤️" },
                { id: "close_friend", label: "Close Friend", color: "#3498db", icon: "👥" },
                { id: "family", label: "Family Member", color: "#9b59b6", icon: "👨‍👩‍👧" },
                { id: "mentor", label: "Mentor/Role Model", color: "#27ae60", icon: "🌟" }
            ],
            connectionTypes: [
                { id: "strong", label: "Strong Bond", style: "solid", width: 3 },
                { id: "complicated", label: "Complicated", style: "dashed", width: 2 },
                { id: "distant", label: "Distant/Faded", style: "dotted", width: 1 },
                { id: "conflict", label: "Conflict", style: "dotted", width: 2, color: "#e74c3c" }
            ],
            metrics: [
                { id: "network_size", label: "Relationship Count", formula: "nodes.length" },
                { id: "romantic_count", label: "Romantic Relationships", formula: "nodes.filter(n => n.type === 'romantic').length" },
                { id: "support_ratio", label: "Support Network Strength", formula: "(connections.filter(c => c.type === 'strong').length / Math.max(1, nodes.length)) * 100", format: "percent" }
            ],
            sociologyLink: {
                concept: "social-capital",
                hammondRef: "Ch. 4",
                explanation: "Your relationship network IS your social capital. The strength and diversity of connections affects opportunities, support during crises, and even health outcomes."
            },
            maxNodes: 12,
            required: false,
            skippable: true
        },

        // MODULE 4 EXERCISES - Partner Selection & Compatibility
        m4_ex1_ranking: {
            id: "m4_ex1_ranking",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Partner Attribute Ranking",
            instructions: "Rank these partner qualities from most to least important to you. Your ranking reveals what you prioritize in mate selection - and how that aligns with sociological patterns.",
            items: [
                { id: "physical_attraction", label: "Physical Attraction", description: "Chemistry and physical compatibility" },
                { id: "shared_values", label: "Shared Values", description: "Similar beliefs about life, family, and priorities" },
                { id: "financial_stability", label: "Financial Stability", description: "Economic security and career success" },
                { id: "emotional_intelligence", label: "Emotional Intelligence", description: "Communication skills and emotional availability" },
                { id: "similar_background", label: "Similar Background", description: "Comparable education, class, or cultural background" },
                { id: "family_orientation", label: "Family Orientation", description: "Desire for children and family life" },
                { id: "independence", label: "Independence", description: "Self-sufficiency and personal autonomy" },
                { id: "sense_of_humor", label: "Sense of Humor", description: "Ability to laugh together and not take life too seriously" }
            ],
            sociologyLink: {
                concept: "educational-homogamy",
                hammondRef: "Ch. 7-8",
                explanation: "Research shows people consistently say 'personality' matters most, but actual partner choices show strong homogamy - we choose partners similar to ourselves in education, class, and background."
            },
            narrativeFlags: {
                top1: "partner_priority",
                top3: "partner_values"
            },
            required: false,
            skippable: true
        },

        m4_ex2_calculator: {
            id: "m4_ex2_calculator",
            type: "calculator",
            section: "PRE_DECISION_EXERCISE",
            title: "Homogamy Calculator",
            instructions: "Enter information about yourself and a potential (real or imagined) partner. The calculator shows your 'homogamy score' - how similar you are across dimensions that predict relationship stability.",
            inputs: [
                { id: "your_education", label: "Your Education Level", type: "select", options: [
                    { value: 1, label: "High school or less" },
                    { value: 2, label: "Some college" },
                    { value: 3, label: "Bachelor's degree" },
                    { value: 4, label: "Graduate degree" }
                ]},
                { id: "partner_education", label: "Partner's Education Level", type: "select", options: [
                    { value: 1, label: "High school or less" },
                    { value: 2, label: "Some college" },
                    { value: 3, label: "Bachelor's degree" },
                    { value: 4, label: "Graduate degree" }
                ]},
                { id: "your_income", label: "Your Income Bracket", type: "select", options: [
                    { value: 1, label: "Under $30k" },
                    { value: 2, label: "$30k - $60k" },
                    { value: 3, label: "$60k - $100k" },
                    { value: 4, label: "Over $100k" }
                ]},
                { id: "partner_income", label: "Partner's Income Bracket", type: "select", options: [
                    { value: 1, label: "Under $30k" },
                    { value: 2, label: "$30k - $60k" },
                    { value: 3, label: "$60k - $100k" },
                    { value: 4, label: "Over $100k" }
                ]},
                { id: "age_difference", label: "Age Difference (years)", type: "number", min: 0, max: 50 },
                { id: "same_religion", label: "Same Religious Background?", type: "select", options: [
                    { value: 1, label: "Yes" },
                    { value: 0, label: "No" }
                ]},
                { id: "same_politics", label: "Similar Political Views?", type: "select", options: [
                    { value: 1, label: "Yes" },
                    { value: 0, label: "No" }
                ]}
            ],
            calculations: [
                { id: "education_match", label: "Education Match", formula: "100 - (Math.abs(your_education - partner_education) * 25)", format: "percent", description: "Similarity in educational attainment" },
                { id: "income_match", label: "Income Match", formula: "100 - (Math.abs(your_income - partner_income) * 25)", format: "percent", description: "Economic similarity" },
                { id: "age_score", label: "Age Compatibility", formula: "Math.max(0, 100 - (age_difference * 5))", format: "percent", description: "Smaller age gaps = higher score" },
                { id: "values_match", label: "Values Alignment", formula: "((same_religion + same_politics) / 2) * 100", format: "percent", description: "Shared beliefs and worldview" },
                { id: "homogamy_score", label: "Overall Homogamy Score", formula: "(education_match + income_match + age_score + values_match) / 4", format: "percent", highlight: true, description: "Higher scores predict greater relationship stability according to research" }
            ],
            interpretation: {
                high: { threshold: 75, message: "High homogamy - research suggests strong compatibility on structural factors." },
                medium: { threshold: 50, message: "Moderate homogamy - some differences that may require negotiation." },
                low: { threshold: 0, message: "Lower homogamy - relationships can succeed but may face additional challenges." }
            },
            sociologyLink: {
                concept: "educational-homogamy",
                hammondRef: "Ch. 7-8",
                explanation: "Homogamy isn't about 'settling' - it's about shared reference points. Couples with similar backgrounds often share communication styles, expectations, and social networks that ease daily life."
            },
            required: false,
            skippable: true
        },

        m4_ex3_quiz: {
            id: "m4_ex3_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Mate Selection Concepts",
            instructions: "Test your understanding of partner selection sociology.",
            questions: [
                {
                    id: "q1",
                    question: "What does 'homogamy' mean in sociology of relationships?",
                    options: [
                        { id: "a", text: "Marrying someone of the same gender" },
                        { id: "b", text: "The tendency to partner with someone similar in education, class, and background", correct: true },
                        { id: "c", text: "Living together before marriage" },
                        { id: "d", text: "Having children within marriage" }
                    ],
                    explanation: "Homogamy refers to 'like marrying like' - the strong pattern of partnering with people similar to ourselves. This happens partly through marriage markets (where we meet partners) and partly through preferences shaped by our own socialization.",
                    hammondRef: "Ch. 8"
                },
                {
                    id: "q2",
                    question: "According to Hammond, what is a 'marriage market'?",
                    options: [
                        { id: "a", text: "Dating apps and websites" },
                        { id: "b", text: "The social contexts where we meet and evaluate potential partners", correct: true },
                        { id: "c", text: "Economic exchanges between families arranging marriages" },
                        { id: "d", text: "The wedding industry" }
                    ],
                    explanation: "Marriage markets are the social settings (colleges, workplaces, neighborhoods, social circles) where we encounter potential partners. Our position in these markets - shaped by education, location, and social class - constrains who we're likely to meet and partner with.",
                    hammondRef: "Ch. 8"
                }
            ],
            passingScore: 50,
            maxAttempts: 3,
            showExplanations: true
        },

        m4_ex4_reflection: {
            id: "m4_ex4_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Your Marriage Market",
            prompt: "Think about where you've met past partners or might meet future ones (school, work, apps, friends, etc.). How has your 'marriage market' been shaped by your education, career, and social circles? Are there types of people you're unlikely to meet given your current social position?",
            minLength: 100,
            maxLength: 2000,
            placeholder: "Consider: Where do you typically meet potential partners? How has this changed over time? What does your 'market' look like in terms of who's available to you?",
            tags: ["partner-selection", "marriage-market", "homogamy", "social-structure"],
            journalEntry: true,
            sociologyLink: {
                concept: "educational-homogamy",
                hammondRef: "Ch. 8",
                explanation: "We don't choose partners from the entire population - we choose from who we meet. And who we meet is structured by education, geography, and social networks."
            },
            required: false,
            skippable: true
        },

        m4_ex5_scenario: {
            id: "m4_ex5_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "The Different Worlds",
            setup: "You've been dating someone for several months and things are getting serious. But you're realizing you come from different backgrounds - different education levels, family expectations, or economic situations. A situation arises that highlights these differences (maybe meeting each other's families, discussing future plans, or handling a financial decision). How do you approach this?",
            branches: [
                {
                    id: "embrace_difference",
                    label: "Embrace the Differences",
                    description: "See your different backgrounds as complementary strengths",
                    consequence: "You build bridges between your worlds, but face ongoing translation work. Some family members on both sides express concern about 'compatibility.'",
                    advantageChange: 0,
                    narrativeFlag: "embraces_heterogamy",
                    sociologyLink: {
                        concept: "educational-homogamy",
                        hammondRef: "Ch. 8",
                        explanation: "Heterogamous relationships (across difference) can succeed but require more active negotiation of expectations, communication styles, and family dynamics."
                    }
                },
                {
                    id: "minimize_difference",
                    label: "Minimize the Differences",
                    description: "Focus on what you have in common, downplay background gaps",
                    consequence: "Things feel smoother day-to-day, but unaddressed differences may resurface around major decisions like careers, children, or where to live.",
                    advantageChange: 0,
                    narrativeFlag: "minimizes_difference",
                    sociologyLink: {
                        concept: "marriage-bar",
                        hammondRef: "Ch. 8",
                        explanation: "Avoiding difficult conversations may work short-term but structural differences in expectations and resources eventually require negotiation."
                    }
                },
                {
                    id: "question_compatibility",
                    label: "Question Long-Term Compatibility",
                    description: "Wonder if these differences are too fundamental",
                    consequence: "You take time to seriously evaluate whether your life visions align. This might strengthen commitment or reveal genuine incompatibilities.",
                    advantageChange: 0,
                    narrativeFlag: "evaluates_compatibility",
                    sociologyLink: {
                        concept: "path-dependency",
                        hammondRef: "Ch. 4",
                        explanation: "Partner selection is a major branching point in the life course. Taking time to evaluate compatibility before deeper commitment can prevent difficult path corrections later."
                    }
                },
                {
                    id: "adapt_to_partner",
                    label: "Adapt to Partner's World",
                    description: "Learn their ways, integrate into their social context",
                    consequence: "You successfully bridge into their world, but may feel you've left parts of yourself behind. Your original family and friends might feel you've changed.",
                    advantageChange: 1,
                    narrativeFlag: "adapts_upward",
                    sociologyLink: {
                        concept: "social-capital",
                        hammondRef: "Ch. 4",
                        explanation: "Partnering 'up' can provide access to new social capital and opportunities, but may come with costs to identity and original relationships."
                    }
                }
            ],
            defaultAdvantage: 0
        },

        // MODULE 5 EXERCISES - Marriage & Partnership Formation
        m5_ex1_ranking: {
            id: "m5_ex1_ranking",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Partnership Priorities",
            instructions: "Rank what matters most to you in a long-term partnership or marriage. This reveals your expectations about how partnerships should function.",
            items: [
                { id: "legal_protection", label: "Legal Protections", description: "Marriage benefits, inheritance, medical decisions" },
                { id: "public_commitment", label: "Public Commitment", description: "Social recognition and ceremony" },
                { id: "shared_finances", label: "Financial Merger", description: "Combined assets, joint accounts" },
                { id: "cohabitation", label: "Living Together", description: "Shared daily life and home" },
                { id: "raising_children", label: "Parenting Together", description: "Raising children as a unit" },
                { id: "emotional_intimacy", label: "Emotional Partnership", description: "Deep connection and support" },
                { id: "independence", label: "Maintained Independence", description: "Separate identities and autonomy" },
                { id: "family_integration", label: "Family Merging", description: "Becoming part of each other's families" }
            ],
            sociologyLink: {
                concept: "marriage-bar",
                hammondRef: "Ch. 9",
                explanation: "What we expect from marriage has changed dramatically. Earlier generations prioritized economic partnership and child-rearing; contemporary expectations often center on emotional fulfillment and personal growth."
            },
            narrativeFlags: {
                top1: "partnership_priority",
                top3: "partnership_values"
            },
            required: false,
            skippable: true
        },

        m5_ex2_quiz: {
            id: "m5_ex2_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Marriage & Partnership Concepts",
            instructions: "Test your understanding of marriage sociology.",
            questions: [
                {
                    id: "q1",
                    question: "What is the 'marriage bar' according to Hammond?",
                    options: [
                        { id: "a", text: "A law preventing certain people from marrying" },
                        { id: "b", text: "The economic prerequisites (job, savings, stability) seen as necessary before marriage", correct: true },
                        { id: "c", text: "The social pressure to marry by a certain age" },
                        { id: "d", text: "A type of wedding venue" }
                    ],
                    explanation: "The 'marriage bar' refers to economic benchmarks people feel they must reach before they're 'ready' for marriage. This bar has risen over time, contributing to delayed marriage among those without economic stability.",
                    hammondRef: "Ch. 9"
                },
                {
                    id: "q2",
                    question: "How has the meaning of marriage changed over time?",
                    options: [
                        { id: "a", text: "Marriage was always primarily about love and emotional fulfillment" },
                        { id: "b", text: "Marriage has shifted from economic/practical partnership toward personal fulfillment and emotional connection", correct: true },
                        { id: "c", text: "Marriage has become less important in society" },
                        { id: "d", text: "Marriage expectations have remained constant across history" }
                    ],
                    explanation: "Historically, marriage was primarily an economic and practical arrangement. The expectation that marriage should provide emotional fulfillment, personal growth, and romantic love is relatively recent and culturally specific.",
                    hammondRef: "Ch. 9"
                }
            ],
            passingScore: 50,
            maxAttempts: 3,
            showExplanations: true
        },

        m5_ex3_reflection: {
            id: "m5_ex3_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Partnership Expectations",
            prompt: "What do you expect from a long-term partnership or marriage? How have these expectations been shaped by what you observed in your family of origin, your cultural background, or your generation's experiences with relationships?",
            minLength: 100,
            maxLength: 2000,
            placeholder: "Consider: What did you learn about marriage from your parents or other adults? How do your expectations differ from theirs? What non-negotiables do you have for a partnership?",
            tags: ["marriage", "expectations", "partnership", "family-of-origin"],
            journalEntry: true,
            sociologyLink: {
                concept: "marriage-bar",
                hammondRef: "Ch. 9",
                explanation: "Our expectations for partnership are shaped by historical period, social class, and family experience. What seems 'natural' to expect from marriage varies dramatically across contexts."
            },
            required: false,
            skippable: true
        },

        m5_ex4_scenario: {
            id: "m5_ex4_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "The Partnership Negotiation",
            setup: "You and your partner are discussing formalizing your relationship. You have different ideas about what this should look like - one of you wants a traditional marriage with merged finances, the other prefers a less traditional arrangement (cohabitation, separate finances, or a different timeline). How do you navigate this?",
            branches: [
                {
                    id: "traditional_path",
                    label: "Advocate for Traditional Marriage",
                    description: "Push for legal marriage with full integration",
                    consequence: "Your partner agrees, though with some reservations. You gain legal protections but may have unresolved tension about the decision process.",
                    advantageChange: 1,
                    narrativeFlag: "chooses_traditional_marriage",
                    sociologyLink: {
                        concept: "marriage-bar",
                        hammondRef: "Ch. 9",
                        explanation: "Legal marriage provides significant benefits (tax, insurance, inheritance, medical decisions) that cohabitation doesn't, creating real incentives for the traditional path."
                    }
                },
                {
                    id: "alternative_path",
                    label: "Embrace Alternative Arrangement",
                    description: "Pursue partnership without traditional marriage structure",
                    consequence: "You create your own partnership terms. You have more flexibility but fewer legal protections. Family members may not recognize your relationship equally.",
                    advantageChange: 0,
                    narrativeFlag: "chooses_alternative_partnership",
                    sociologyLink: {
                        concept: "cohabitation",
                        hammondRef: "Ch. 8",
                        explanation: "Cohabitation has become increasingly common but still lacks many legal protections of marriage. It can be a stepping stone or a permanent alternative to marriage."
                    }
                },
                {
                    id: "compromise_path",
                    label: "Find Middle Ground",
                    description: "Create a hybrid approach that honors both perspectives",
                    consequence: "You marry but maintain some independence (separate accounts, clear agreements). This requires more explicit communication but honors both needs.",
                    advantageChange: 1,
                    narrativeFlag: "negotiates_partnership",
                    sociologyLink: {
                        concept: "gender-dynamics",
                        hammondRef: "Ch. 4",
                        explanation: "Negotiating partnership terms explicitly - rather than assuming traditional roles - can create more equitable relationships but requires ongoing communication."
                    }
                },
                {
                    id: "delay_path",
                    label: "Table the Discussion",
                    description: "Agree you're not ready to decide and continue as-is",
                    consequence: "The pressure eases temporarily, but the fundamental difference remains unresolved. External events may eventually force the decision.",
                    advantageChange: 0,
                    narrativeFlag: "delays_partnership_decision",
                    sociologyLink: {
                        concept: "emerging-adulthood",
                        hammondRef: "Ch. 4",
                        explanation: "Extended emerging adulthood means major commitments like marriage are increasingly delayed, but eventually structural pressures (children, health, aging parents) often force decisions."
                    }
                }
            ],
            defaultAdvantage: 0
        },

        m5_ex5_mapping: {
            id: "m5_ex5_mapping",
            type: "mapping",
            section: "PRE_DECISION_EXERCISE",
            title: "Partnership Agreement Builder",
            instructions: "Map out the key areas of your partnership and how you'd want to handle them. Add topics and indicate your preferred approach for each.",
            nodeTypes: [
                { id: "finances", label: "Finances", color: "#27ae60", icon: "💰" },
                { id: "housing", label: "Housing", color: "#3498db", icon: "🏠" },
                { id: "career", label: "Career Decisions", color: "#9b59b6", icon: "💼" },
                { id: "family", label: "Family/Children", color: "#e74c3c", icon: "👨‍👩‍👧" },
                { id: "household", label: "Household Labor", color: "#f39c12", icon: "🧹" },
                { id: "social", label: "Social Life", color: "#1abc9c", icon: "👥" }
            ],
            connectionTypes: [
                { id: "joint", label: "Joint/Shared", style: "solid", width: 3 },
                { id: "primary_me", label: "I Lead", style: "dashed", width: 2 },
                { id: "primary_partner", label: "Partner Leads", style: "dashed", width: 2 },
                { id: "independent", label: "Independent", style: "dotted", width: 1 }
            ],
            metrics: [
                { id: "topics_covered", label: "Areas Discussed", formula: "nodes.length" },
                { id: "shared_areas", label: "Joint Decisions", formula: "connections.filter(c => c.type === 'joint').length" }
            ],
            sociologyLink: {
                concept: "gender-dynamics",
                hammondRef: "Ch. 4",
                explanation: "Who 'leads' in different areas of partnership often follows gendered patterns. Making these explicit allows for more intentional choices."
            },
            maxNodes: 10,
            required: false,
            skippable: true
        },

        // MODULE 6 EXERCISES - Parenthood & Work-Family Balance
        m6_ex1_calculator: {
            id: "m6_ex1_calculator",
            type: "calculator",
            section: "PRE_DECISION_EXERCISE",
            title: "Childcare Cost Calculator",
            instructions: "Estimate the costs of different childcare arrangements. These calculations reveal why childcare is often called a 'second mortgage.'",
            inputs: [
                { id: "daycare_monthly", label: "Daycare Cost (monthly)", type: "number", min: 0, max: 5000, default: 1500 },
                { id: "num_children", label: "Number of Children", type: "number", min: 1, max: 5, default: 1 },
                { id: "years_needed", label: "Years of Care Needed", type: "number", min: 1, max: 18, default: 5 },
                { id: "lost_income", label: "Income Lost if Parent Stays Home (annual)", type: "number", min: 0, max: 200000, default: 50000 }
            ],
            outputs: [
                { id: "annual_daycare", label: "Annual Daycare Cost", formula: "daycare_monthly * 12 * num_children", format: "currency" },
                { id: "total_daycare", label: "Total Daycare Cost", formula: "daycare_monthly * 12 * num_children * years_needed", format: "currency" },
                { id: "stay_home_cost", label: "Cost of Staying Home", formula: "lost_income * years_needed", format: "currency" },
                { id: "difference", label: "Difference (Work vs Stay Home)", formula: "(lost_income * years_needed) - (daycare_monthly * 12 * num_children * years_needed)", format: "currency", highlight: true }
            ],
            interpretation: {
                high: { threshold: 50000, message: "Working provides significant financial advantage over staying home - if you can find quality affordable care." },
                medium: { threshold: 0, message: "Costs are roughly comparable - the decision involves factors beyond pure finances." },
                low: { threshold: -999999, message: "Staying home may be financially comparable to or better than working after childcare costs." }
            },
            sociologyLink: {
                concept: "second-shift",
                hammondRef: "Ch. 12",
                explanation: "The 'choice' to stay home is rarely purely individual - it's shaped by childcare costs, wage gaps, and whose career is seen as primary."
            },
            required: false,
            skippable: true
        },

        m6_ex2_ranking: {
            id: "m6_ex2_ranking",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Work-Family Priorities",
            instructions: "Rank these work-family considerations from most to least important in your decision-making.",
            items: [
                { id: "career_advancement", label: "Career Advancement", description: "Maintaining professional growth trajectory" },
                { id: "time_with_children", label: "Time with Children", description: "Being present for daily moments and milestones" },
                { id: "financial_security", label: "Financial Security", description: "Stable income and benefits" },
                { id: "personal_identity", label: "Personal Identity", description: "Maintaining sense of self beyond parent role" },
                { id: "partner_equity", label: "Partner Equity", description: "Fair division of paid and unpaid work" },
                { id: "child_quality_care", label: "Quality Childcare", description: "Best developmental environment for children" },
                { id: "flexibility", label: "Schedule Flexibility", description: "Ability to handle unexpected needs" },
                { id: "extended_family", label: "Family Support", description: "Involvement of grandparents/relatives" }
            ],
            sociologyLink: {
                concept: "work-family-conflict",
                hammondRef: "Ch. 11",
                explanation: "Work-family conflict is structural, not personal failure. The way work and care are organized in society creates impossible choices."
            },
            narrativeFlags: { top1: "workfamily_priority", top3: "workfamily_values" },
            required: false,
            skippable: true
        },

        m6_ex3_quiz: {
            id: "m6_ex3_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Work-Family Concepts",
            instructions: "Test your understanding of work-family dynamics.",
            questions: [
                {
                    id: "q1",
                    question: "What is the 'second shift' according to Hochschild?",
                    options: [
                        { id: "a", text: "Working a second job for extra income" },
                        { id: "b", text: "The unpaid domestic labor performed after paid work, disproportionately by women", correct: true },
                        { id: "c", text: "Night shift work at a factory" },
                        { id: "d", text: "Overtime hours at one's primary job" }
                    ],
                    explanation: "The 'second shift' refers to the unpaid housework and childcare that workers (predominantly women) do after their paid workday ends. This creates a 'leisure gap' between partners.",
                    hammondRef: "Ch. 12"
                },
                {
                    id: "q2",
                    question: "What is 'intensive parenting'?",
                    options: [
                        { id: "a", text: "Spending more time with children than previous generations" },
                        { id: "b", text: "A cultural expectation that good parenting requires constant enrichment, supervision, and child-centered family life", correct: true },
                        { id: "c", text: "A parenting style used only by wealthy families" },
                        { id: "d", text: "Strict disciplinary approaches to child-rearing" }
                    ],
                    explanation: "Intensive parenting standards have risen dramatically, creating pressure (especially on mothers) to invest enormous time, money, and emotional energy into children's development and enrichment.",
                    hammondRef: "Ch. 10"
                }
            ],
            passingScore: 50,
            maxAttempts: 3,
            showExplanations: true
        },

        m6_ex4_reflection: {
            id: "m6_ex4_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Division of Labor Reflection",
            prompt: "If you have or plan to have children, how would you want to divide paid work and unpaid caregiving with a partner? What factors would influence this decision? If you don't plan to have children, reflect on how you've seen other families navigate this challenge.",
            minLength: 100,
            maxLength: 2000,
            placeholder: "Consider: Who would reduce work hours or stay home? How would you handle the 'second shift'? What role would extended family play? How would you maintain equity if incomes differ?",
            tags: ["work-family", "division-of-labor", "gender", "caregiving"],
            journalEntry: true,
            sociologyLink: {
                concept: "second-shift",
                hammondRef: "Ch. 12",
                explanation: "Even in dual-earner couples, women typically do more housework and childcare. This 'stalled revolution' affects careers, relationships, and wellbeing."
            },
            required: false,
            skippable: true
        },

        m6_ex5_scenario: {
            id: "m6_ex5_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "The Daycare Crisis",
            setup: "Your childcare arrangement suddenly falls through - the daycare closes, or your nanny quits, or a family member can no longer help. You and your partner both have demanding jobs. Someone needs to solve this immediately. How do you handle it?",
            branches: [
                {
                    id: "i_handle",
                    label: "I'll Handle It",
                    description: "Take time off work to find new care and cover the gap",
                    consequence: "You solve the immediate crisis but your work suffers. Your boss is understanding but you sense it's noted. Your partner's career continues uninterrupted.",
                    advantageChange: -1,
                    narrativeFlag: "absorbs_care_crisis",
                    sociologyLink: {
                        concept: "opting-out",
                        hammondRef: "Ch. 4",
                        explanation: "Small accommodations for caregiving can accumulate into major career impacts. The person who 'flexes' first often continues to be the default crisis-handler."
                    }
                },
                {
                    id: "partner_handles",
                    label: "Partner Handles It",
                    description: "Ask partner to take the lead on solving this",
                    consequence: "Your career stays on track, but there may be relationship tension about who sacrifices. Your partner may feel the burden fell unfairly on them.",
                    advantageChange: 0,
                    narrativeFlag: "partner_absorbs_crisis",
                    sociologyLink: {
                        concept: "gender-dynamics",
                        hammondRef: "Ch. 4",
                        explanation: "When partners have different incomes or career trajectories, it often 'makes sense' for one to sacrifice - but this logic perpetuates inequality."
                    }
                },
                {
                    id: "split_equally",
                    label: "Split It Equally",
                    description: "Both take partial time off and share the burden",
                    consequence: "Neither career takes the full hit, but both are affected. Some colleagues judge the 'lack of commitment' while others admire the partnership.",
                    advantageChange: 0,
                    narrativeFlag: "shares_care_burden",
                    sociologyLink: {
                        concept: "work-family-conflict",
                        hammondRef: "Ch. 11",
                        explanation: "Sharing caregiving equally requires both partners to push against workplace expectations of 'ideal workers' who have no family demands."
                    }
                },
                {
                    id: "emergency_solution",
                    label: "Pay for Emergency Care",
                    description: "Hire expensive temporary help to avoid any work disruption",
                    consequence: "Work continues smoothly but at significant financial cost. You realize how precarious your work-family balance really is.",
                    advantageChange: 0,
                    narrativeFlag: "buys_way_out",
                    sociologyLink: {
                        concept: "care-work",
                        hammondRef: "Ch. 4",
                        explanation: "Those with resources can 'outsource' the care crisis, but this option isn't available to everyone - class shapes work-family solutions."
                    }
                }
            ],
            defaultAdvantage: 0
        },

        // MODULE 7 EXERCISES - Family Challenges & Crises
        m7_ex1_mapping: {
            id: "m7_ex1_mapping",
            type: "mapping",
            section: "PRE_DECISION_EXERCISE",
            title: "Support Network Map",
            instructions: "Map your support network - the people you could turn to in a crisis. Consider who provides emotional support, practical help, financial assistance, and information/advice.",
            nodeTypes: [
                { id: "emotional", label: "Emotional Support", color: "#e74c3c", icon: "❤️" },
                { id: "practical", label: "Practical Help", color: "#27ae60", icon: "🔧" },
                { id: "financial", label: "Financial Support", color: "#f39c12", icon: "💰" },
                { id: "information", label: "Advice/Information", color: "#3498db", icon: "💡" }
            ],
            connectionTypes: [
                { id: "strong", label: "Reliable/Close", style: "solid", width: 3 },
                { id: "moderate", label: "Sometimes Available", style: "dashed", width: 2 },
                { id: "weak", label: "Distant/Uncertain", style: "dotted", width: 1 }
            ],
            metrics: [
                { id: "network_size", label: "Network Size", formula: "nodes.length" },
                { id: "strong_ties", label: "Strong Ties", formula: "connections.filter(c => c.type === 'strong').length" },
                { id: "support_diversity", label: "Support Types", formula: "new Set(nodes.map(n => n.type)).size" }
            ],
            sociologyLink: {
                concept: "social-capital",
                hammondRef: "Ch. 4",
                explanation: "Social capital - resources available through relationships - is a crucial buffer against crisis. Network size, strength, and diversity all matter for resilience."
            },
            maxNodes: 15,
            required: false,
            skippable: true
        },

        m7_ex2_quiz: {
            id: "m7_ex2_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Crisis & Resilience Concepts",
            instructions: "Test your understanding of family crisis theory.",
            questions: [
                {
                    id: "q1",
                    question: "In the ABC-X model of family crisis, what does 'B' represent?",
                    options: [
                        { id: "a", text: "The behavior of family members during crisis" },
                        { id: "b", text: "The resources available to the family for coping", correct: true },
                        { id: "c", text: "The biological factors affecting health" },
                        { id: "d", text: "The budget constraints during hardship" }
                    ],
                    explanation: "In the ABC-X model: A = the stressor event, B = the family's resources for coping, C = the family's perception/definition of the crisis, and X = the crisis outcome.",
                    hammondRef: "Ch. 12"
                },
                {
                    id: "q2",
                    question: "Why do some families recover from crises while others don't?",
                    options: [
                        { id: "a", text: "Some families are just stronger than others" },
                        { id: "b", text: "Recovery depends on resources, perception, and prior family functioning - not just individual strength", correct: true },
                        { id: "c", text: "Religious families always recover better" },
                        { id: "d", text: "Wealthy families never experience real crises" }
                    ],
                    explanation: "Crisis outcomes depend on structural resources (money, networks, support), how the family perceives/frames the crisis, and their baseline functioning. 'Resilience' is contextual, not a fixed trait.",
                    hammondRef: "Ch. 12"
                }
            ],
            passingScore: 50,
            maxAttempts: 3,
            showExplanations: true
        },

        m7_ex3_reflection: {
            id: "m7_ex3_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Crisis Experience Reflection",
            prompt: "Think about a challenging time your family experienced (any family - origin, current, or chosen). Using the ABC-X framework, consider: What was the stressor (A)? What resources did you have (B)? How did family members perceive the situation (C)? What was the outcome (X)?",
            minLength: 100,
            maxLength: 2000,
            placeholder: "Consider: Did some family members have more resources than others? Did people define the crisis differently? What helped or hindered recovery?",
            tags: ["crisis", "resilience", "ABC-X", "family-stress"],
            journalEntry: true,
            sociologyLink: {
                concept: "social-capital",
                hammondRef: "Ch. 12",
                explanation: "The ABC-X model shows that crisis outcomes aren't just about the event itself, but about resources and perceptions that are unequally distributed."
            },
            required: false,
            skippable: true
        },

        m7_ex4_scenario: {
            id: "m7_ex4_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "The Unexpected Crisis",
            setup: "A major crisis hits your family - a job loss, serious illness, or other significant stressor. Your previous choices (career, partner, support network) now shape your options. Resources are tight and everyone is stressed. How do you respond?",
            branches: [
                {
                    id: "mobilize_network",
                    label: "Mobilize Support Network",
                    description: "Reach out to family, friends, and community for help",
                    consequence: "Your network responds - some help more than expected, others disappoint. You get through but now 'owe' favors. Some relationships are strengthened, others strained.",
                    advantageChange: 1,
                    narrativeFlag: "uses_social_capital",
                    sociologyLink: {
                        concept: "social-capital",
                        hammondRef: "Ch. 4",
                        explanation: "Social capital can be 'spent' during crisis, but must be maintained and reciprocated over time."
                    }
                },
                {
                    id: "self_reliant",
                    label: "Handle It Ourselves",
                    description: "Keep the crisis private and manage within immediate family",
                    consequence: "You maintain privacy and independence but resources stretch thin. The stress affects relationships. Pride is preserved but at a cost.",
                    advantageChange: -1,
                    narrativeFlag: "self_reliant_crisis",
                    sociologyLink: {
                        concept: "path-dependency",
                        hammondRef: "Ch. 4",
                        explanation: "American culture values self-reliance, but this can prevent people from accessing help that could buffer crisis impacts."
                    }
                },
                {
                    id: "institutional_help",
                    label: "Seek Institutional Support",
                    description: "Apply for programs, benefits, or professional help",
                    consequence: "You access resources but navigate bureaucracy and sometimes stigma. Some help is available, some isn't. You learn the system has gaps.",
                    advantageChange: 0,
                    narrativeFlag: "uses_institutions",
                    sociologyLink: {
                        concept: "work-family-conflict",
                        hammondRef: "Ch. 11",
                        explanation: "Social safety nets vary dramatically - what's available depends on employment, location, and eligibility rules that don't cover everyone."
                    }
                },
                {
                    id: "major_change",
                    label: "Make Major Life Changes",
                    description: "Relocate, change careers, or restructure family to cope",
                    consequence: "The crisis forces transformation. Some changes prove positive long-term; others create new challenges. Life will never quite return to 'before.'",
                    advantageChange: 0,
                    narrativeFlag: "crisis_transforms",
                    sociologyLink: {
                        concept: "path-dependency",
                        hammondRef: "Ch. 4",
                        explanation: "Crises are turning points in the life course. They can open new paths but also close off old ones."
                    }
                }
            ],
            defaultAdvantage: 0
        },

        m7_ex5_ranking: {
            id: "m7_ex5_ranking",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Crisis Resources Ranking",
            instructions: "Rank these resources by how important you think they are for getting through a family crisis.",
            items: [
                { id: "money_savings", label: "Money/Savings", description: "Financial cushion to absorb shocks" },
                { id: "family_support", label: "Family Support", description: "Relatives who can help practically or emotionally" },
                { id: "friend_network", label: "Friend Network", description: "Friends who show up when needed" },
                { id: "health_insurance", label: "Health Insurance", description: "Coverage for medical emergencies" },
                { id: "job_security", label: "Job Security", description: "Stable employment that allows flexibility" },
                { id: "mental_health", label: "Mental Health Resources", description: "Access to therapy or counseling" },
                { id: "community_ties", label: "Community Connections", description: "Religious, neighborhood, or group affiliations" },
                { id: "information_access", label: "Information/Knowledge", description: "Knowing where to find help and how systems work" }
            ],
            sociologyLink: {
                concept: "cumulative-advantage",
                hammondRef: "Ch. 3",
                explanation: "Resources cluster - those with money often also have networks, insurance, and information access. This compounds advantage and disadvantage during crisis."
            },
            narrativeFlags: { top1: "crisis_priority", top3: "crisis_resources" },
            required: false,
            skippable: true
        },

        // MODULE 8 EXERCISES - Systems Thinking & Final Reflection
        m8_ex1_reflection: {
            id: "m8_ex1_reflection",
            type: "reflection",
            section: "REFLECTION_PROMPT",
            title: "Journey Reflection",
            prompt: "Look back at your journey through all 8 modules. What surprised you most? Which decisions felt truly 'yours' versus constrained by structure? If you could go back and change one decision, which would it be and why?",
            minLength: 150,
            maxLength: 3000,
            placeholder: "Consider: How did your starting point (Module 1) shape later options? Where did you feel most constrained? Most free? What patterns emerged?",
            tags: ["reflection", "life-course", "structure-agency", "path-dependency"],
            journalEntry: true,
            sociologyLink: {
                concept: "path-dependency",
                hammondRef: "All chapters",
                explanation: "The life course perspective shows how timing, linked lives, and historical context shape trajectories in ways that feel personal but are structurally patterned."
            },
            required: true,
            skippable: false
        },

        m8_ex2_quiz: {
            id: "m8_ex2_quiz",
            type: "quiz",
            section: "COMPREHENSION_CHECK",
            title: "Life Course Integration",
            instructions: "Final comprehension check on life course concepts.",
            questions: [
                {
                    id: "q1",
                    question: "What does the 'life course perspective' emphasize?",
                    options: [
                        { id: "a", text: "Individual choices are the primary determinant of life outcomes" },
                        { id: "b", text: "Biology determines our life path" },
                        { id: "c", text: "Lives unfold in social, historical, and structural contexts that shape trajectories", correct: true },
                        { id: "d", text: "Everyone follows the same developmental stages" }
                    ],
                    explanation: "The life course perspective emphasizes that lives are embedded in and shaped by historical times, social contexts, linked lives, and timing of transitions.",
                    hammondRef: "Ch. 1-14"
                },
                {
                    id: "q2",
                    question: "What is the relationship between 'structure' and 'agency'?",
                    options: [
                        { id: "a", text: "Structure completely determines outcomes; agency is an illusion" },
                        { id: "b", text: "Individuals have complete freedom to make any choice" },
                        { id: "c", text: "Structure constrains but doesn't eliminate agency; individuals navigate within constraints", correct: true },
                        { id: "d", text: "Structure and agency are unrelated" }
                    ],
                    explanation: "Structure and agency interact dynamically. Social structures shape options and outcomes, but individuals still make choices within constraints.",
                    hammondRef: "Throughout"
                }
            ],
            passingScore: 50,
            maxAttempts: 3,
            showExplanations: true
        },

        m8_ex3_scenario: {
            id: "m8_ex3_scenario",
            type: "scenario",
            section: "TRANSITION",
            title: "Policy Impact",
            setup: "Imagine a policy change that would have affected your life course: universal childcare, free college, paid family leave, or affordable housing. How might your journey have been different?",
            branches: [
                {
                    id: "universal_childcare",
                    label: "Universal Childcare",
                    description: "Free, quality childcare for all families",
                    consequence: "Work-family decisions would have been easier. The 'choice' between career and caregiving less stark.",
                    advantageChange: 0,
                    narrativeFlag: "imagines_childcare_policy",
                    sociologyLink: { concept: "work-family-conflict", hammondRef: "Ch. 11", explanation: "Countries with universal childcare have higher maternal employment and lower gender wage gaps." }
                },
                {
                    id: "free_college",
                    label: "Free College Education",
                    description: "No tuition costs or student debt",
                    consequence: "Education decisions wouldn't have been constrained by cost. Career paths chosen by passion, not earning potential.",
                    advantageChange: 0,
                    narrativeFlag: "imagines_education_policy",
                    sociologyLink: { concept: "path-dependency", hammondRef: "Ch. 4", explanation: "Education debt shapes career choices, relationship timing, and family formation." }
                },
                {
                    id: "paid_leave",
                    label: "Paid Family Leave",
                    description: "12 months paid leave for new parents",
                    consequence: "Parenthood transitions less financially stressful. Both parents could bond with children. Career penalties reduced.",
                    advantageChange: 0,
                    narrativeFlag: "imagines_leave_policy",
                    sociologyLink: { concept: "second-shift", hammondRef: "Ch. 12", explanation: "Paid leave policies affect who does caregiving and career impacts." }
                },
                {
                    id: "affordable_housing",
                    label: "Affordable Housing",
                    description: "Housing costs capped at 25% of income",
                    consequence: "More income for other life goals. Less geographic constraint on job choices. Family formation less delayed.",
                    advantageChange: 0,
                    narrativeFlag: "imagines_housing_policy",
                    sociologyLink: { concept: "marriage-bar", hammondRef: "Ch. 9", explanation: "Housing costs affect when people can afford to marry or have children." }
                }
            ],
            defaultAdvantage: 0
        },

        m8_ex4_ranking: {
            id: "m8_ex4_ranking",
            type: "ranking",
            section: "PRE_DECISION_EXERCISE",
            title: "Key Life Course Insights",
            instructions: "Rank these sociological insights by how much they changed your understanding of family life.",
            items: [
                { id: "path_dependency", label: "Path Dependency", description: "Early decisions constrain later options" },
                { id: "linked_lives", label: "Linked Lives", description: "Our choices affect and are affected by others" },
                { id: "timing_matters", label: "Timing Matters", description: "Same event has different meaning at different ages" },
                { id: "structure_agency", label: "Structure vs Agency", description: "Choices constrained but not determined" },
                { id: "gender_shapes", label: "Gender Shapes Everything", description: "From work to care to relationships" },
                { id: "class_matters", label: "Class Matters", description: "Resources compound advantage/disadvantage" },
                { id: "family_diverse", label: "Family is Diverse", description: "No single 'right' family form" },
                { id: "policy_shapes", label: "Policy Shapes Choices", description: "What seems personal is often political" }
            ],
            sociologyLink: {
                concept: "path-dependency",
                hammondRef: "All chapters",
                explanation: "These concepts interconnect - path dependency shaped by class; timing gendered; policy creates context for choices."
            },
            narrativeFlags: { top1: "key_insight", top3: "major_learnings" },
            required: false,
            skippable: true
        }
    },

    // ========== MODULE SECTION SYSTEM ==========
    // Each module has 10 standardized sections
    moduleSections: {
        // Section type definitions
        sectionTypes: {
            MODULE_INTRO: {
                order: 1,
                title: "Module Introduction",
                description: "Objectives, Hammond chapter reference, estimated time",
                required: true,
                hasExercise: false
            },
            CONCEPT_INTRO: {
                order: 2,
                title: "Key Concepts",
                description: "Core sociological concepts with definitions and examples",
                required: true,
                hasExercise: false
            },
            PRE_DECISION_EXERCISE: {
                order: 3,
                title: "Pre-Decision Activities",
                description: "Interactive exercises before making choices",
                required: false,
                hasExercise: true,
                exerciseTypes: ["ranking", "calculator", "mapping"]
            },
            DECISION_1: {
                order: 4,
                title: "First Decision Point",
                description: "Primary choice card selection",
                required: true,
                hasExercise: false,
                usesExistingChoiceSystem: true
            },
            COMPREHENSION_CHECK: {
                order: 5,
                title: "Understanding Check",
                description: "Quiz to verify concept comprehension",
                required: true,
                hasExercise: true,
                exerciseTypes: ["quiz"]
            },
            REFLECTION_PROMPT: {
                order: 6,
                title: "Personal Reflection",
                description: "Connect concepts to personal experience",
                required: false,
                hasExercise: true,
                exerciseTypes: ["reflection"]
            },
            TRANSITION: {
                order: 7,
                title: "Transition Scenario",
                description: "Branching scenario showing path dependency",
                required: true,
                hasExercise: true,
                exerciseTypes: ["scenario"]
            },
            DECISION_2: {
                order: 8,
                title: "Second Decision Point",
                description: "Secondary choice based on first decision",
                required: true,
                hasExercise: false,
                usesExistingChoiceSystem: true
            },
            MODULE_SYNTHESIS: {
                order: 9,
                title: "Module Synthesis",
                description: "Summary of key concepts and takeaways",
                required: true,
                hasExercise: false
            },
            EXPORT_REMINDER: {
                order: 10,
                title: "Save & Export",
                description: "Reminder to export before continuing",
                required: true,
                hasExercise: false,
                blocksContinue: true
            }
        },

        // Module 1 section configuration - Character Creation (special handling)
        module1: {
            title: "Family Origins & Starting Point",
            hammondRef: "Ch. 1",
            estimatedTime: "15-20 min",
            isCharacterCreation: true, // Flag for special handling
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Understand how family of origin shapes life trajectories",
                        "Recognize that 'family' is socially constructed and varies across cultures",
                        "Identify your own values and how they were shaped by socialization"
                    ],
                    keyQuestion: "How does where we come from shape where we can go?"
                },
                CONCEPT_INTRO: {
                    concepts: ["family-of-origin", "socialization"],
                    example: {
                        title: "The Invisible Curriculum",
                        description: "Before you ever entered school, your family taught you lessons about money, work, relationships, gender, and conflict. These weren't formal lessons - they were absorbed through daily life. A child who sees parents discuss finances learns different lessons than one whose parents fight about money or never discuss it at all."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m1_ex1_genogram", "m1_ex2_values_sort"],
                    instruction: "Before selecting your character's background, explore your own family patterns and values."
                },
                DECISION_1: {
                    questionKey: "lifestage_and_family",
                    description: "Select your life stage and family structure",
                    usesExistingForm: true // Uses the existing Module 1 form elements
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m1_ex3_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m1_ex4_reflection"]
                },
                TRANSITION: {
                    exercises: ["m1_ex5_scenario"]
                },
                DECISION_2: {
                    questionKey: "core_values",
                    description: "Select your guiding value",
                    usesExistingForm: true
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["family-of-origin", "socialization"],
                    takeaway: "Your starting point isn't destiny, but it shapes the opportunities, constraints, and patterns you bring into adulthood. Understanding these influences is the first step to conscious choice.",
                    connectionToNext: "Your family background and values now influence how you approach education, career, and life decisions in Module 2."
                },
                EXPORT_REMINDER: {
                    message: "Your character is created! Export your game data before continuing to save your starting point.",
                    required: true
                }
            }
        },

        // Module 2 section configuration
        module2: {
            title: "Education & Career Pathways",
            hammondRef: "Ch. 4",
            estimatedTime: "15-20 min",
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Understand how education creates path dependency",
                        "Recognize cumulative advantage/disadvantage in career paths",
                        "Explore how structural factors constrain 'choices'"
                    ],
                    keyQuestion: "How do early education and career decisions create trajectories that are hard to change?"
                },
                CONCEPT_INTRO: {
                    concepts: ["path-dependency", "cumulative-advantage", "educational-homogamy", "gender-dynamics"],
                    example: {
                        title: "The Two-Body Problem",
                        description: "When dual-career couples must decide whose job to prioritize during relocations, the decision isn't just 'personal' - it's shaped by gender norms, salary gaps, and whose career is seen as 'primary'."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m2_ex1_ranking", "m2_ex2_calculator", "m2_ex5_mapping"],
                    instruction: "Complete these activities to reflect on your priorities before making decisions."
                },
                DECISION_1: {
                    questionKey: "education",
                    branchesByLifeStage: true
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m2_ex3_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m2_ex4_reflection"]
                },
                TRANSITION: {
                    exercises: ["m2_ex6_scenario"]
                },
                DECISION_2: {
                    questionKey: "career",
                    branchesByLifeStage: true,
                    dependsOn: "DECISION_1"
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["path-dependency", "cumulative-advantage"],
                    takeaway: "Education and career decisions aren't purely individual choices - they're shaped by family resources, structural constraints, and have cascading effects on later life options.",
                    connectionToNext: "Your education and career path now shapes your 'marriage market' position and work-family options in upcoming modules."
                },
                EXPORT_REMINDER: {
                    message: "Export your game data before continuing. You'll need this for your Canvas assignment.",
                    required: true
                }
            }
        },

        // Module 3 section configuration
        module3: {
            title: "Relationships & Communication",
            hammondRef: "Ch. 5-6",
            estimatedTime: "15-20 min",
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Understand how attachment patterns affect adult relationships",
                        "Recognize emotional labor and its gendered distribution",
                        "Explore communication patterns that predict relationship success/failure"
                    ],
                    keyQuestion: "How do early relationship experiences and communication patterns shape our adult partnerships?"
                },
                CONCEPT_INTRO: {
                    concepts: ["emotional-labor", "social-capital"],
                    example: {
                        title: "The 'Mental Load'",
                        description: "In heterosexual couples, women typically remember birthdays, schedule appointments, notice when supplies run low, and plan social activities. This invisible 'mental load' is emotional labor - unpaid work that makes family life function but goes unrecognized."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m3_ex1_ranking", "m3_ex5_mapping"],
                    instruction: "Explore your relationship priorities and patterns before making decisions."
                },
                DECISION_1: {
                    questionKey: "relationship",
                    branchesByLifeStage: true
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m3_ex2_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m3_ex3_reflection"]
                },
                TRANSITION: {
                    exercises: ["m3_ex4_scenario"]
                },
                DECISION_2: {
                    questionKey: "communication",
                    branchesByLifeStage: true,
                    dependsOn: "DECISION_1"
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["emotional-labor", "social-capital"],
                    takeaway: "Relationship patterns aren't just personal - they're learned in families, shaped by gender socialization, and maintained through unequal emotional labor. Healthy relationships require awareness of these structures.",
                    connectionToNext: "Your communication patterns and relationship approach now affect partner selection and long-term partnership dynamics."
                },
                EXPORT_REMINDER: {
                    message: "Export your game data before continuing. You'll need this for your Canvas assignment.",
                    required: true
                }
            }
        },

        // Module 4 section configuration
        module4: {
            title: "Partner Selection & Compatibility",
            hammondRef: "Ch. 7-8",
            estimatedTime: "15-20 min",
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Understand homogamy and its role in partner selection",
                        "Recognize how 'marriage markets' constrain romantic choices",
                        "Explore the tension between 'love' and structural compatibility"
                    ],
                    keyQuestion: "Do we really 'choose' our partners, or does social structure choose for us?"
                },
                CONCEPT_INTRO: {
                    concepts: ["educational-homogamy", "marriage-bar"],
                    example: {
                        title: "The College Sorting Machine",
                        description: "Colleges aren't just about education - they're powerful marriage markets. Students meet partners of similar academic ability, ambition, and often class background. By graduation, many have found their future spouse among people pre-sorted by the admissions process."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m4_ex1_ranking", "m4_ex2_calculator"],
                    instruction: "Explore your partner preferences and how they align with homogamy patterns."
                },
                DECISION_1: {
                    questionKey: "partner_selection",
                    branchesByLifeStage: true
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m4_ex3_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m4_ex4_reflection"]
                },
                TRANSITION: {
                    exercises: ["m4_ex5_scenario"]
                },
                DECISION_2: {
                    questionKey: "relationship_approach",
                    branchesByLifeStage: true,
                    dependsOn: "DECISION_1"
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["educational-homogamy", "marriage-bar"],
                    takeaway: "Partner selection feels deeply personal, but our choices are profoundly shaped by where we meet people (marriage markets) and what feels 'comfortable' (homogamy). Understanding these patterns doesn't diminish love - it helps us make more conscious choices.",
                    connectionToNext: "Your partner selection now shapes your path into marriage/partnership and the household structure you'll build together."
                },
                EXPORT_REMINDER: {
                    message: "Export your game data before continuing. You'll need this for your Canvas assignment.",
                    required: true
                }
            }
        },

        // Module 5 section configuration
        module5: {
            title: "Marriage & Partnership Formation",
            hammondRef: "Ch. 9",
            estimatedTime: "15-20 min",
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Understand the changing meaning of marriage across history",
                        "Recognize the 'marriage bar' and its effects on partnership timing",
                        "Explore different partnership structures and their implications"
                    ],
                    keyQuestion: "What does marriage mean today, and who gets to have it?"
                },
                CONCEPT_INTRO: {
                    concepts: ["marriage-bar", "cohabitation"],
                    example: {
                        title: "The Waiting Game",
                        description: "College-educated couples often delay marriage until both partners have established careers and saved money. Working-class couples may never reach these benchmarks, leading to long-term cohabitation or single parenthood - not because they value marriage less, but because the 'bar' keeps rising."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m5_ex1_ranking", "m5_ex5_mapping"],
                    instruction: "Explore your partnership priorities and how you'd structure a long-term relationship."
                },
                DECISION_1: {
                    questionKey: "partnership_timing",
                    branchesByLifeStage: true
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m5_ex2_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m5_ex3_reflection"]
                },
                TRANSITION: {
                    exercises: ["m5_ex4_scenario"]
                },
                DECISION_2: {
                    questionKey: "partnership_structure",
                    branchesByLifeStage: true,
                    dependsOn: "DECISION_1"
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["marriage-bar", "cohabitation"],
                    takeaway: "Marriage has transformed from economic necessity to personal choice - but access to marriage remains shaped by class, education, and economic stability. The 'marriage bar' creates different pathways for different groups.",
                    connectionToNext: "Your partnership structure now affects decisions about children, work-family balance, and household labor division."
                },
                EXPORT_REMINDER: {
                    message: "Export your game data before continuing. You'll need this for your Canvas assignment.",
                    required: true
                }
            }
        },

        // Module 6 section configuration
        module6: {
            title: "Parenthood & Work-Family Balance",
            hammondRef: "Ch. 10-12",
            estimatedTime: "15-20 min",
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Understand the 'second shift' and gendered division of household labor",
                        "Recognize how work-family conflict is structural, not personal",
                        "Explore childcare costs and their impact on family decisions"
                    ],
                    keyQuestion: "Why is 'having it all' so hard, and who pays the price?"
                },
                CONCEPT_INTRO: {
                    concepts: ["second-shift", "work-family-conflict"],
                    example: {
                        title: "The Mental Load",
                        description: "Beyond physical tasks, someone has to remember doctor appointments, track permission slips, notice when clothes are outgrown, and plan meals. This invisible 'mental load' of family management falls disproportionately on mothers, even when physical tasks are shared."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m6_ex1_calculator", "m6_ex2_ranking"],
                    instruction: "Explore childcare costs and your work-family priorities."
                },
                DECISION_1: {
                    questionKey: "parenthood_decision",
                    branchesByLifeStage: true
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m6_ex3_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m6_ex4_reflection"]
                },
                TRANSITION: {
                    exercises: ["m6_ex5_scenario"]
                },
                DECISION_2: {
                    questionKey: "workfamily_arrangement",
                    branchesByLifeStage: true,
                    dependsOn: "DECISION_1"
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["second-shift", "work-family-conflict"],
                    takeaway: "Work-family conflict isn't about personal choices or time management - it's about how society organizes work and care. The 'second shift' reveals that gender equality at work requires equality at home.",
                    connectionToNext: "Your work-family arrangements now shape how you'll handle family challenges and crises in Module 7."
                },
                EXPORT_REMINDER: {
                    message: "Export your game data before continuing. You'll need this for your Canvas assignment.",
                    required: true
                }
            }
        },

        // Module 7 section configuration
        module7: {
            title: "Family Challenges & Crises",
            hammondRef: "Ch. 12-13",
            estimatedTime: "15-20 min",
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Understand the ABC-X model of family crisis",
                        "Recognize how resources shape crisis outcomes",
                        "Explore how previous life choices affect resilience"
                    ],
                    keyQuestion: "Why do some families weather crises while others don't?"
                },
                CONCEPT_INTRO: {
                    concepts: ["social-capital", "cumulative-advantage"],
                    example: {
                        title: "The Same Storm, Different Boats",
                        description: "When COVID hit, all families faced stress - but outcomes varied dramatically. Those with savings, stable remote jobs, and space to isolate fared differently than those in crowded housing, essential jobs, or with pre-existing health conditions. Same crisis, unequal resources, different outcomes."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m7_ex1_mapping", "m7_ex5_ranking"],
                    instruction: "Map your support network and consider what resources matter most in crisis."
                },
                DECISION_1: {
                    questionKey: "crisis_type",
                    branchesByLifeStage: true
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m7_ex2_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m7_ex3_reflection"]
                },
                TRANSITION: {
                    exercises: ["m7_ex4_scenario"]
                },
                DECISION_2: {
                    questionKey: "crisis_response",
                    branchesByLifeStage: true,
                    dependsOn: "DECISION_1"
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["social-capital", "cumulative-advantage"],
                    takeaway: "Family resilience isn't a personality trait - it's shaped by resources that are unequally distributed. The ABC-X model shows that crisis outcomes depend on what you have (resources) and how you see it (perception), not just what happens to you.",
                    connectionToNext: "Your crisis experiences and resources now inform your final reflection on the life course and family systems."
                },
                EXPORT_REMINDER: {
                    message: "Export your game data before continuing. You'll need this for your Canvas assignment.",
                    required: true
                }
            }
        },

        // Module 8 section configuration
        module8: {
            title: "Reflection & Integration",
            hammondRef: "Conclusion",
            estimatedTime: "15-20 min",
            sections: {
                MODULE_INTRO: {
                    objectives: [
                        "Synthesize learnings across all life course decisions",
                        "Connect personal experience to sociological concepts",
                        "Reflect on how structural forces shaped your path"
                    ],
                    keyQuestion: "Looking back at your life course, what do your choices reveal about the intersection of individual agency and social structure?"
                },
                CONCEPT_INTRO: {
                    concepts: ["path-dependency", "cumulative-advantage"],
                    example: {
                        title: "Your Life Course Story",
                        description: "Every choice you made was shaped by earlier choices, available options, and structural constraints. Your final advantage score isn't about 'winning' - it's about understanding how cumulative processes work. Similar starting points can lead to very different outcomes based on timing, context, and chance."
                    }
                },
                PRE_DECISION_EXERCISE: {
                    exercises: ["m8_ex1_reflection"],
                    instruction: "Begin your final reflection by considering your complete life course journey."
                },
                COMPREHENSION_CHECK: {
                    exercises: ["m8_ex2_quiz"]
                },
                REFLECTION_PROMPT: {
                    exercises: ["m8_ex4_ranking"]
                },
                TRANSITION: {
                    exercises: ["m8_ex3_scenario"]
                },
                MODULE_SYNTHESIS: {
                    keyConcepts: ["path-dependency", "cumulative-advantage", "social-capital", "educational-homogamy"],
                    takeaway: "Your life course demonstrates how individual choices and structural forces intertwine. Understanding these patterns helps you make more conscious decisions and advocate for policies that expand options for everyone.",
                    connectionToNext: "Complete your final export to submit your life course analysis for the course assignment."
                },
                EXPORT_REMINDER: {
                    message: "This is your FINAL export. Make sure to download your complete life course data for your Canvas submission.",
                    required: true
                }
            }
        }
    }
};

// Helper function to get choices for a module/question
function getChoicesForQuestion(moduleId, questionKey, lifeStage = null) {
    const fullKey = lifeStage ? `m${moduleId}_${questionKey}_${lifeStage}` : `m${moduleId}_${questionKey}`;
    return GAME_DATA.choices[fullKey] || GAME_DATA.choices[`m${moduleId}_${questionKey}`] || null;
}

// Helper to get concept info
function getConcept(conceptKey) {
    return GAME_DATA.concepts[conceptKey] || null;
}

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAME_DATA, getChoicesForQuestion, getConcept };
}
