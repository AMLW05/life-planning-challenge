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
        // Family Structure
        "nuclear-family": { term: "Nuclear Family", definition: "Two parents and children in one household.", hammondRef: "Ch. 1" },
        "extended-family": { term: "Extended Family", definition: "Multiple generations living together with shared resources.", hammondRef: "Ch. 1" },
        "chosen-family": { term: "Chosen Family", definition: "Non-biological 'kin' providing family-like support.", hammondRef: "Ch. 1" },

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
