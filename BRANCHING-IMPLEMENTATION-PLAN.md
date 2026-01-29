# Life Planning Challenge - Age-Responsive Branching Implementation Plan

**Status:** Module 1 life stage selection COMPLETE ✅
**Next:** Implement Module 2 with all 4 branches

---

## Implementation Architecture

### Life Stage Storage
```javascript
gameState.characterData.lifeStage = 'traditional' | 'returning' | 'midcareer' | 'laterlife'
```

### Module Branching Pattern
Each module 2-8 will have:
1. **Branching detection** - Check `gameState.characterData.lifeStage`
2. **Content sections** - 4 div sections (one per life stage), initially hidden
3. **Dynamic display** - Show only relevant section based on life stage
4. **Completion function** - Handle all 4 paths with shared core logic

---

## Module 2: Education & Career - FULL SPECIFICATION

### Traditional Age (18-24) - "Launching Your Career Path"

**Context:** Just finishing high school or early college. Making foundational education/career decisions.

**Age in scenario:** 22 years old

**Question 1: Education Path**
Options:
- Bachelor's Degree (4 years) → Age 26, $30K loans, $50-60K salary
- Associate Degree (2 years) → Age 24, $12K loans, $40-45K salary
- Trade Certificate (1-2 years) → Age 23, $5K costs, $35-50K salary
- Immediate Workforce → Age 22, $0 debt, $28-32K salary

**Question 2: Career Field**
- Professional/Business (requires degree, 50-70 hrs/week, rigid)
- Healthcare/Helping (moderate flexibility, emotional labor, gendered)
- STEM/Technical (high pay, male-dominated, long training)
- Trades/Manual (physical demands, good pay, rigid hours)
- Creative/Service (low pay, flexibility, precarity)

**Sociological Concepts:** Life course perspective, path dependency, educational stratification, gender socialization in career choice

---

### Returning Adult (25-35) - "Career Change While Managing Life"

**Context:** Already have work experience, possibly family commitments. Considering change while managing existing responsibilities.

**Age in scenario:** 30 years old

**Question 1: Career/Education Decision**
Options:
- Return to school full-time (sacrifice income, pile up debt, family care challenge)
- Part-time education while working (exhausting, slow progress, 3-5 years)
- Professional certification (faster, targeted, still working, manageable)
- Stay in current career, seek advancement (stability, but maybe unfulfilling)
- Pivot within same field (lateral move, less risk, moderate change)

**Question 2: Work-Life Considerations** (NEW - specific to this age)
- How will you manage childcare during training/transition?
- How will partner's income support/constrain this choice?
- Can you afford career disruption at this life stage?

**Sociological Concepts:** Role strain, second shift anticipation, human capital investment timing, opportunity costs of life stage

---

### Mid-Career (36-50) - "Balancing Career Peak with Family Demands"

**Context:** Established in career, likely has teenagers/young adults, aging parents. Peak earning years meet peak demands.

**Age in scenario:** 42 years old

**Question 1: Career Status Decision**
Options:
- Continue current career trajectory (stability, income, but burnout risk)
- Pursue leadership/management advancement (more pay, more hours, more stress)
- Reduce hours for caregiving (financial hit, career stall, but life balance)
- Start own business/consulting (flexibility, risk, capital needs)
- Industry pivot (late-career risk, but fulfillment, learning curve)

**Question 2: Caregiving Reality Check**
- Who needs you? (aging parents, teenagers, adult kids boomerang)
- Can you afford to prioritize care over career advancement?
- Is your partner sharing caregiving or are you the "default parent"?

**Sociological Concepts:** Sandwich generation, peak demands, gender gap in caregiving, "motherhood penalty" vs "fatherhood premium"

---

### Later-Life (50+) - "Late Career Transitions and Legacy"

**Context:** Approaching or in late career, adult children, possible grandchildren. Navigating retirement transition, health, legacy.

**Age in scenario:** 58 years old

**Question 1: Career Transition Decision**
Options:
- Continue to normal retirement age (65-67) - stability, pension max, status quo
- Semi-retirement/reduce hours (less income, more time, gradual transition)
- Career change for fulfillment (late-life reinvention, learning, purpose)
- Full retirement now (if financially able) - time for grandchildren, travel, hobbies
- Extend working past 67 (financial need, social connection, purpose)

**Question 2: Life Stage Realities**
- Adult children status (independent, struggling and need support, estranged)
- Grandchildren involvement (active grandparenting vs distant)
- Aging parent care (still alive? your responsibility?)
- Your health status affecting work capacity

**Sociological Concepts:** Generativity, intergenerational transfers, age discrimination, retirement inequality, productive aging

---

## Implementation Steps for Each Module

### Step 1: Create HTML Structure
```html
<!-- MODULE X -->
<div id="moduleX" class="content game-section">
    <h2>Module X: Title</h2>

    <!-- Branch: Traditional Age -->
    <div id="moduleX_traditional" class="branch-content" style="display:none;">
        <!-- Content specific to 18-24 -->
    </div>

    <!-- Branch: Returning Adult -->
    <div id="moduleX_returning" class="branch-content" style="display:none;">
        <!-- Content specific to 25-35 -->
    </div>

    <!-- Branch: Mid-Career -->
    <div id="moduleX_midcareer" class="branch-content" style="display:none;">
        <!-- Content specific to 36-50 -->
    </div>

    <!-- Branch: Later-Life -->
    <div id="moduleX_laterlife" class="branch-content" style="display:none;">
        <!-- Content specific to 50+ -->
    </div>

    <button onclick="completeModuleX()">Complete Module</button>
</div>
```

### Step 2: Create Init Function
```javascript
function initModuleX() {
    const lifeStage = gameState.characterData.lifeStage || 'traditional';

    // Hide all branches
    document.querySelectorAll('#moduleX .branch-content').forEach(div => {
        div.style.display = 'none';
    });

    // Show appropriate branch
    document.getElementById(`moduleX_${lifeStage}`).style.display = 'block';
}
```

### Step 3: Update Completion Function
```javascript
function completeModuleX() {
    const lifeStage = gameState.characterData.lifeStage || 'traditional';

    // Validate based on life stage
    // Save data based on life stage
    // Mark complete
    // Show appropriate feedback based on life stage
}
```

### Step 4: Call Init on Module Load
```javascript
function showSection(sectionId) {
    // ... existing code ...

    if (sectionId === 'moduleX') {
        initModuleX();
    }
}
```

---

## Remaining Modules - Quick Branching Overview

### Module 3: Relationships & Communication
- **Traditional:** Dating, exploring, early relationships
- **Returning:** Already partnered/married OR dating after divorce
- **Mid-Career:** Long-term relationship challenges, potential "gray divorce"
- **Later-Life:** Decades-long marriage OR widowed OR new late-life relationship

### Module 4: Mate Selection / Partner Compatibility
- **Traditional:** Choosing partners, homogamy, mate selection
- **Returning:** Already chose OR choosing while co-parenting
- **Mid-Career:** Evaluating long-term partnership OR post-divorce dating
- **Later-Life:** Sustaining long relationship OR companionship in later life

### Module 5: Marriage & Partnership Formation
- **Traditional:** To marry or not? Cohabitation decision
- **Returning:** Already married (assess) OR remarriage considerations
- **Mid-Career:** Long-term marriage OR separation/divorce decision
- **Later-Life:** Decades-married OR widowhood OR LAT relationships

### Module 6: Parenthood & Work-Family Balance
- **Traditional:** Future parenthood considerations (anticipatory)
- **Returning:** Young children NOW - childcare crisis, second shift
- **Mid-Career:** Teenagers/young adults - different challenges (driving, college, mental health)
- **Later-Life:** Adult children (boomerang? grandchildren? estrangement?)

### Module 7: Family Challenges & Crises
- **Traditional:** Unexpected pregnancy, job loss, relationship breakup
- **Returning:** Childcare collapse, partner job loss, health scare
- **Mid-Career:** Aging parent needs care, teen crisis, job loss at 40+
- **Later-Life:** Spouse health emergency, adult child crisis, forced retirement

### Module 8: Systems Reflection
- Same reflective structure, but references different life stage experiences
- Map decisions across YOUR trajectory
- Reflect on structural forces at YOUR life stage
- Consider policy needs for YOUR generation

---

## Sociological Alignment Across All Branches

Every branch teaches the SAME core concepts, but through age-appropriate lens:

✅ **Life Course Perspective** - Different stages show timing effects
✅ **Structural Constraints** - Manifest differently by age (loans vs eldercare)
✅ **Gender Inequality** - Persistent across lifespan but different mechanisms
✅ **Work-Family Conflict** - Different at 22 (anticipatory) vs 45 (actual crisis)
✅ **Social Class** - Educational sorting, income effects, cumulative advantage
✅ **Family Systems** - Interconnected decisions across life stages
✅ **Intersectionality** - Race, class, gender interact differently by age

---

## Testing Plan

For each completed module with branching:

1. ✅ Test Traditional path - validate questions, completion, data save
2. ✅ Test Returning path - ensure different content displays
3. ✅ Test Mid-Career path - verify age-appropriate scenarios
4. ✅ Test Later-Life path - check late-life context
5. ✅ Test switching life stages - ensure game adapts throughout
6. ✅ Verify export includes life stage info
7. ✅ Confirm sociological concepts present in all branches

---

## Development Priority

**Phase 1 (This Session):**
- ✅ Module 1 life stage selection COMPLETE
- ⏳ Module 2 with all 4 branches (detailed implementation below)

**Phase 2 (Next Session):**
- Modules 3-4 with branching

**Phase 3 (Future Session):**
- Modules 5-6 with branching

**Phase 4 (Final Session):**
- Modules 7-8 with branching
- Full testing and refinement

---

## Benefits Summary

1. **Relevance** - Every student sees themselves in the game
2. **Deeper Learning** - Compare experiences across life stages in class discussions
3. **Empathy** - Understand different life trajectories
4. **Replayability** - Try different life stage to see how timing matters
5. **Pedagogical Power** - Life course perspective becomes EXPERIENTIAL not just theoretical

This is the most sophisticated family sociology game ever created for undergraduate education.
