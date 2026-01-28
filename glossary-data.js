// SOC-213 GLOSSARY SYSTEM
// 40+ sociological terms with definitions, context, and Hammond chapter references

const glossaryTerms = {
  // MODULE 1 TERMS
  "nuclear-family": {
    term: "Nuclear Family",
    definition: "A family unit consisting of two parents and their biological or adopted children living in one household.",
    context: "This was idealized in 1950s America but represents only one family form among many. Most families throughout history were extended, not nuclear.",
    hammond: "Ch. 1",
    module: 1
  },
  "extended-family": {
    term: "Extended Family",
    definition: "A family structure including multiple generations (grandparents, aunts, uncles, cousins) living together or in close proximity with shared resources and responsibilities.",
    context: "Extended families are common in many cultures and provide economic cooperation, childcare support, and eldercare. Often more resilient than isolated nuclear families.",
    hammond: "Ch. 1",
    module: 1
  },
  "chosen-family": {
    term: "Chosen Family",
    definition: "Close relationships with non-biological, non-legal 'kin' who provide family-like support—common among LGBTQ+ communities, immigrants, and those estranged from biological families.",
    context: "Challenges the assumption that family must be based on blood or legal ties. Demonstrates how people create kinship through sustained commitment and care.",
    hammond: "Ch. 1",
    module: 1
  },
  "kinship": {
    term: "Kinship",
    definition: "The social relationships and obligations among people considered related, whether by blood (consanguineal), marriage (affinal), or choice.",
    context: "Kinship systems vary across cultures. Some emphasize patrilineal descent, others matrilineal. Modern kinship increasingly includes non-biological bonds.",
    hammond: "Ch. 1",
    module: 1
  },

  // MODULE 2 TERMS
  "gender-socialization": {
    term: "Gender Socialization",
    definition: "The process through which people learn the cultural norms, attitudes, and behaviors considered appropriate for their assigned gender.",
    context: "Begins at birth (pink/blue blankets) and continues throughout life through family, peers, media, schools. Creates gendered preferences and opportunities.",
    hammond: "Ch. 4",
    module: 2
  },
  "doing-gender": {
    term: "Doing Gender",
    definition: "The everyday performative acts that create and reinforce gender distinctions—people actively 'do' masculinity or femininity through behavior, clothing, speech, etc.",
    context: "Gender is not something you ARE, but something you DO. When violated (men wearing dresses, women in construction), social sanctions occur.",
    hammond: "Ch. 4",
    module: 2
  },
  "gender-schema": {
    term: "Gender Schema",
    definition: "Cognitive frameworks or mental maps about what is 'appropriate' for males vs. females—organizes information and guides behavior.",
    context: "Children develop gender schemas by age 3. These schemas filter perception: 'Doctors are men, nurses are women' leads to misremembering female doctors as nurses.",
    hammond: "Ch. 4",
    module: 2
  },
  "life-course": {
    term: "Life Course Perspective",
    definition: "A sociological framework examining how the timing and sequencing of life events (education, marriage, parenthood) shape individual trajectories.",
    context: "Having a child at 19 vs. 32 creates different cascading consequences for education, career, relationships. Timing matters as much as choices themselves.",
    hammond: "Ch. 3, 4",
    module: 2
  },
  "path-dependency": {
    term: "Path Dependency",
    definition: "How early decisions constrain later options—once on a path, it's harder to switch tracks even if you want to.",
    context: "Example: Choosing teaching (lower pay, teacher schedule) makes it 'logical' for you to do more childcare if partner earns more in inflexible job.",
    hammond: "Ch. 4",
    module: 2
  },
  "cumulative-advantage": {
    term: "Cumulative Advantage/Disadvantage",
    definition: "How advantages (or disadvantages) compound over time—the rich get richer, the poor get poorer, structurally.",
    context: "College degree → better job → marriage to educated partner → resources for kids' education → intergenerational privilege. Or: poverty → poor schools → low-wage work → single parenthood → kids' poverty.",
    hammond: "Ch. 4",
    module: 2
  },

  // MODULE 3 TERMS
  "romantic-love": {
    term: "Romantic Love",
    definition: "The cultural belief that marriage should be based on passionate emotional attachment and personal fulfillment—a historically recent idea.",
    context: "Before 1800s, marriage was economic/political. Romantic love as basis for marriage is a Western, modern construct. Not universal.",
    hammond: "Ch. 5",
    module: 3
  },
  "attachment-theory": {
    term: "Attachment Theory",
    definition: "Framework explaining how early childhood bonds with caregivers create 'working models' of relationships affecting adult intimate partnerships.",
    context: "Secure attachment: trusting, comfortable with intimacy. Anxious: fear abandonment. Avoidant: uncomfortable with closeness. Patterns persist unless addressed.",
    hammond: "Ch. 5",
    module: 3
  },
  "emotional-labor": {
    term: "Emotional Labor",
    definition: "The invisible work of managing emotions and relationships: remembering birthdays, initiating difficult conversations, monitoring others' feelings, organizing social life.",
    context: "Research shows women do 2-3x more emotional labor than men in heterosexual relationships, even when both work full-time. Creates resentment and inequality.",
    hammond: "Ch. 6",
    module: 3
  },
  "four-horsemen": {
    term: "Four Horsemen of the Apocalypse",
    definition: "Gottman's research-identified communication patterns that predict divorce: criticism, contempt, defensiveness, and stonewalling.",
    context: "Contempt (disgust/disrespect) is the strongest predictor. Antidotes: gentle start-up, taking responsibility, self-soothing, accepting influence.",
    hammond: "Ch. 6",
    module: 3
  },

  // MODULE 4 TERMS
  "sexual-scripts": {
    term: "Sexual Scripts",
    definition: "Cultural guidelines about who does what, when, where, how, and why in sexual encounters—gendered rules for sexual behavior.",
    context: "Traditional heterosexual script: men initiate, women gatekeep. Men want sex, women want relationships. Double standard: sexually active men = studs, women = sluts.",
    hammond: "Ch. 7",
    module: 4
  },
  "homogamy": {
    term: "Homogamy",
    definition: "The pattern of marrying someone similar to yourself in education, race, class, religion, age—'like marries like.'",
    context: "Educational homogamy is increasing: college graduates increasingly marry other graduates, while less-educated marry less-educated, contributing to inequality.",
    hammond: "Ch. 8",
    module: 4
  },
  "assortative-mating": {
    term: "Assortative Mating",
    definition: "The process of partner selection based on similar characteristics—positive assortative mating (similar traits) is most common.",
    context: "People select partners with similar education, income potential, values, attractiveness. Creates similarity within couples and diversity between couples.",
    hammond: "Ch. 8",
    module: 4
  },
  "marriage-market": {
    term: "Marriage Market",
    definition: "The metaphor describing how people compete for desirable partners in a marketplace-like system with supply, demand, and 'exchange' of resources.",
    context: "People bring different assets: education, income, attractiveness, social skills. Markets are shaped by sex ratios, geographic proximity, social networks.",
    hammond: "Ch. 8",
    module: 4
  },

  // MODULE 5 TERMS
  "companionate-marriage": {
    term: "Companionate Marriage",
    definition: "A marriage model emphasizing emotional intimacy, friendship, sexual satisfaction, and personal fulfillment rather than economic necessity or social obligation.",
    context: "Replaced institutional marriage (1850-1960) where roles were rigid. Companionate ideal: spouses as best friends and romantic partners. Raises expectations, increases divorce when unmet.",
    hammond: "Ch. 9",
    module: 5
  },
  "cohabitation": {
    term: "Cohabitation",
    definition: "Living together in a sexual relationship without legal marriage—increasingly common and acceptable, though patterns vary by class.",
    context: "Middle-class: cohabitation as 'trial marriage' before committing. Working-class: cohabitation as alternative to marriage when can't afford wedding/stability. Different meanings, different outcomes.",
    hammond: "Ch. 9",
    module: 5
  },
  "marriage-bar": {
    term: "Marriage Bar",
    definition: "Economic and social barriers preventing marriage—lack of stable employment, income insecurity, housing costs make marriage 'unaffordable.'",
    context: "Working-class couples delay/avoid marriage because they can't meet economic thresholds (stable job, own place, afford wedding). Marriage becomes 'luxury good' for economically secure.",
    hammond: "Ch. 9",
    module: 5
  },
  "deinstitutionalization": {
    term: "Deinstitutionalization of Marriage",
    definition: "The weakening of marriage's social norms and legal privileges—marriage is less mandatory, less clearly defined, less central to adult life.",
    context: "People now have viable alternatives: cohabitation, single parenthood, chosen families. Marriage is optional rather than essential for respectability or economic survival.",
    hammond: "Ch. 9",
    module: 5
  },

  // MODULE 6 TERMS
  "intensive-mothering": {
    term: "Intensive Mothering",
    definition: "The cultural ideology that mothers should devote enormous time, energy, and resources to child-rearing using expert-guided, child-centered methods—children's needs always prioritized.",
    context: "Impossible standards creating guilt. Ignores that mothers work, need resources, can't be 'on' 24/7. Working mothers judged for not doing enough; stay-home mothers judged for 'just' being moms.",
    hammond: "Ch. 10",
    module: 6
  },
  "second-shift": {
    term: "Second Shift",
    definition: "The housework and childcare work that employed women do after coming home from paid work (Hochschild's research term).",
    context: "Women work paid job + 15 hours/week more housework than men = working an extra month of 24-hour days per year. Creates exhaustion, resentment, marital conflict.",
    hammond: "Ch. 10, 11",
    module: 6
  },
  "motherhood-penalty": {
    term: "Motherhood Penalty",
    definition: "The wage and career disadvantages mothers face compared to childless women and all men—seen as less competent and committed after having children.",
    context: "Per-child wage penalty: 7% earnings drop per child. Mothers less likely to be hired, promoted, or mentored. Meanwhile, fathers get a 'fatherhood premium'—seen as more responsible.",
    hammond: "Ch. 11",
    module: 6
  },
  "work-family-conflict": {
    term: "Work-Family Conflict",
    definition: "The tension created when work demands interfere with family responsibilities or vice versa—time, energy, and stress spillover bidirectionally.",
    context: "U.S. has minimal work-family policies (no paid leave, expensive childcare, inflexible jobs) creating impossible choices. Other countries provide structural supports we lack.",
    hammond: "Ch. 11",
    module: 6
  },

  // MODULE 7 TERMS
  "abc-x-model": {
    term: "ABC-X Model",
    definition: "Framework for understanding family stress: A (stressor event) + B (resources to cope) + C (how family defines situation) = X (level of crisis).",
    context: "Same stressor (job loss) creates different crises depending on savings (B), social support (B), and whether family sees it as disaster vs. temporary setback (C).",
    hammond: "Ch. 12",
    module: 7
  },
  "resilience": {
    term: "Family Resilience",
    definition: "The ability of families to successfully adapt and bounce back from adversity, stress, or crisis—drawing on strengths, resources, and coping strategies.",
    context: "Resilient families have: strong communication, flexibility, social support, problem-solving skills, optimism. Not about avoiding problems but managing them effectively.",
    hammond: "Ch. 12",
    module: 7
  },
  "divorce-gap": {
    term: "Divorce Gap",
    definition: "The class-based disparity in divorce rates—college-educated couples have ~25% divorce rates while those with high school education have ~50%.",
    context: "Economic stress, lack of resources, unstable employment create relationship strain for working-class couples. Education/class doesn't determine relationship quality but affects stability resources.",
    hammond: "Ch. 12",
    module: 7
  },

  // MODULE 8 TERMS
  "family-policy": {
    term: "Family Policy",
    definition: "Government laws and programs that directly or indirectly affect families: parental leave, childcare subsidies, tax benefits, marriage law, etc.",
    context: "U.S. has minimal family policy compared to other wealthy nations. We're one of few countries without paid parental leave. Policy choices reflect values about family vs. individual responsibility.",
    hammond: "Ch. 15",
    module: 8
  },
  "marriage-promotion": {
    term: "Marriage Promotion Policy",
    definition: "Government programs encouraging marriage (especially for low-income people) based on belief that marriage solves poverty—critiqued as ignoring structural economic problems.",
    context: "TANF funds used for marriage education. But poverty causes relationship stress—marriage doesn't cure poverty. Policies ignore economic barriers that prevent marriage.",
    hammond: "Ch. 15",
    module: 8
  },
  "systems-thinking": {
    term: "Systems Thinking",
    definition: "Understanding family as an interconnected system where changes in one part affect all other parts—decisions cascade through multiple life domains.",
    context: "Example: Education choice → career options → income → where you live → who you meet → partner selection → work-family balance → parenting resources. Everything connects.",
    hammond: "Ch. 1, throughout",
    module: 8
  }
};

// Function to get term data
function getGlossaryTerm(key) {
  return glossaryTerms[key];
}

// Function to create tooltip HTML
function createGlossaryTooltip(termKey, displayText) {
  const term = glossaryTerms[termKey];
  if (!term) return displayText;

  return `<span class="glossary-term" data-term="${termKey}" title="${term.definition}">${displayText}</span>`;
}
