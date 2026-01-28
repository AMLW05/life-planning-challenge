# Life Planning Challenge - Testing Checklist

Use this checklist to verify all game functionality before deploying to students.

---

## Pre-Deployment Testing

### ✅ Module 1: Character Creation
- [ ] All 4 questions display correctly (Q1-Q4)
- [ ] Radio buttons work for Q1-Q3
- [ ] Textarea accepts input for Q4
- [ ] Validation prevents empty submission
- [ ] Alert shows on successful completion
- [ ] Module marked as completed in hub
- [ ] Data saved to localStorage
- [ ] Can return to Module 1 and see "completed" status

### ✅ Module 2: Education & Career
- [ ] Both questions display (Q5-Q6)
- [ ] Radio buttons work
- [ ] Validation prevents empty submission
- [ ] Completion alert shows
- [ ] Module marked as completed
- [ ] Module 3 unlocks after completion
- [ ] Data persists in localStorage

### ✅ Module 3: Communication
- [ ] All 5 questions display (Q7-Q11)
- [ ] Radio buttons work for all questions
- [ ] Validation prevents empty submission
- [ ] Communication score calculates (0-8)
- [ ] Feedback message shows appropriate score message
- [ ] Relationship status (Q11) saves correctly
- [ ] Module 4 unlocks after completion
- [ ] Data persists

### ✅ Module 4: Mate Selection

**Single Path:**
- [ ] If Q11 was "single", shows single message
- [ ] Skip option works
- [ ] Module completes without partner questions
- [ ] Module 5 unlocks

**Partnered Path:**
- [ ] If Q11 was "committed" or "casual", shows partner questions
- [ ] All 5 questions display (Q12-Q16)
- [ ] Radio buttons work
- [ ] Compatibility score calculates (0-10)
- [ ] Feedback shows appropriate message for score
- [ ] If Q16 = "end", affects Module 5
- [ ] Module 5 unlocks
- [ ] Data persists

### ✅ Module 5: Partnership Formation

**Single/Ended Relationship Path:**
- [ ] Shows single-specific question (Q17_single)
- [ ] Two radio options work
- [ ] Saves correctly
- [ ] Module completes
- [ ] Module 6 unlocks

**Partnered Path:**
- [ ] Shows 3 partnership questions (Q17-Q19)
- [ ] All radio buttons work
- [ ] Marriage feedback mentions class patterns
- [ ] Cohabitation feedback mentions legal protections
- [ ] LAT feedback mentions independence
- [ ] Module 6 unlocks
- [ ] Data persists

### ✅ Module 6: Parenthood

**Initial Decision:**
- [ ] Q20 displays with 4 options
- [ ] Radio buttons work

**If "yes_now" selected:**
- [ ] Conditional questions appear (Q21-Q24)
- [ ] Childcare costs info box displays
- [ ] All 4 follow-up questions work
- [ ] Childcare cost calculates correctly:
  - Daycare center = $1,350
  - Family daycare = $900
  - Family member = $200
  - Parent home = $0

**If other option selected:**
- [ ] Conditional questions stay hidden
- [ ] Can complete module with just Q20

**General:**
- [ ] Appropriate feedback shows based on choice
- [ ] Module 7 unlocks
- [ ] Data persists

### ✅ Module 7: Crisis Management

**Crisis Generation:**
- [ ] Crisis text displays in red alert box
- [ ] One of three crisis types shows
- [ ] Appropriate Q25 section displays (job_loss, health, or financial)
- [ ] Other Q25 sections stay hidden

**All Crisis Types:**
- [ ] Q25 radio buttons work
- [ ] Q26 checkboxes work (can select multiple)
- [ ] Q27 radio buttons work
- [ ] Validation requires all three answered
- [ ] Resilience score calculates
- [ ] Appropriate feedback shows
- [ ] Module 8 unlocks
- [ ] Crisis type and responses save

**Test Each Crisis:**
- [ ] Play through with job_loss crisis
- [ ] Play through with health crisis
- [ ] Play through with financial crisis

### ✅ Module 8: Final Reflection

**Dynamic Profile:**
- [ ] Profile summary populates automatically
- [ ] Shows data from all completed modules
- [ ] formatValue() makes data readable
- [ ] All scores display correctly

**Reflection Questions:**
- [ ] Q28 radio buttons work
- [ ] Q29 textarea accepts input
- [ ] Q30 checkboxes work (multiple select)
- [ ] Q31 textarea accepts input
- [ ] Q32 textarea accepts input
- [ ] Validation requires all questions answered
- [ ] Validation requires text in all textareas (not empty)
- [ ] Success message shows on completion
- [ ] All 8 modules show as completed in hub

---

## Module Hub Testing

### Module Cards:
- [ ] All 8 modules display
- [ ] Correct icons show for each module
- [ ] Module 1 always available
- [ ] Completed modules show green with ✅
- [ ] Next available module shows yellow (if current)
- [ ] Locked modules show grayed out with 🔒
- [ ] Sequential unlocking works (3 unlocks after 2, etc.)
- [ ] Clicking completed module reopens it
- [ ] Clicking available module opens it
- [ ] Clicking locked module does nothing

### Progress Bar:
- [ ] Shows 0/8 initially
- [ ] Updates after each module completion
- [ ] Shows correct count (1/8, 2/8, etc.)
- [ ] Progress bar fills proportionally
- [ ] Shows 8/8 after all modules complete

---

## Data Export Testing

### Text Export:
- [ ] Button is visible in Module Hub
- [ ] Clicking opens save dialog
- [ ] Filename includes timestamp
- [ ] File contains all module data
- [ ] Module 1 data present
- [ ] Module 2 data present
- [ ] Module 3 data present (if completed)
- [ ] Module 4 data present (if completed)
- [ ] Module 5 data present (if completed)
- [ ] Module 6 data present (if completed)
- [ ] Module 7 data present (if completed)
- [ ] Module 8 reflections present (if completed)
- [ ] Scores display correctly (communication, compatibility, resilience)
- [ ] Essay text included
- [ ] Format is readable
- [ ] Can open file in text editor

### JSON Export:
- [ ] Button is visible in Module Hub
- [ ] Clicking opens save dialog
- [ ] Filename includes timestamp
- [ ] File is valid JSON (can parse)
- [ ] Contains full gameState object
- [ ] characterData object complete
- [ ] modulesCompleted array correct
- [ ] Timestamps present

---

## Data Persistence Testing

### localStorage:
- [ ] Complete Module 1, close browser, reopen → data persists
- [ ] Complete multiple modules → all data persists
- [ ] Progress shows correctly after browser restart
- [ ] Can continue from where left off
- [ ] Completed modules stay completed

### Clearing Data:
- [ ] Clear browser cache/localStorage → game resets
- [ ] Can start fresh game after clearing

---

## Browser Compatibility Testing

Test in multiple browsers:

### Desktop:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile:
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive layout works
- [ ] Touch interactions work
- [ ] Text input works on mobile keyboards

---

## Accessibility Testing

- [ ] Keyboard navigation works (Tab through options)
- [ ] Enter key submits forms
- [ ] Text is readable (sufficient contrast)
- [ ] Font sizes are reasonable on mobile
- [ ] Radio buttons have labels
- [ ] Checkboxes have labels
- [ ] Textareas have labels

---

## Edge Cases Testing

### Branching Logic:
- [ ] Single path through Modules 4-5 works completely
- [ ] Partnered path through Modules 4-5 works completely
- [ ] Ending relationship in Module 4 properly affects Module 5
- [ ] Choosing childfree works without errors
- [ ] Each crisis type in Module 7 works independently

### Data Validation:
- [ ] Cannot skip questions (validation catches it)
- [ ] Cannot submit empty essays (validation catches it)
- [ ] Alert messages are helpful, not technical
- [ ] No JavaScript errors in console (check browser dev tools)

### Scoring Edge Cases:
- [ ] Communication score 0 (all poor choices)
- [ ] Communication score 8 (all good choices)
- [ ] Compatibility score 0 (all misaligned)
- [ ] Compatibility score 10 (perfectly aligned)
- [ ] Resilience score 1 (limited support only)
- [ ] Resilience score 8+ (many supports + relationship strengthens)

---

## Performance Testing

- [ ] Page loads in < 3 seconds
- [ ] No lag when switching between modules
- [ ] Export functions respond immediately
- [ ] No memory leaks (can complete full game without slowdown)
- [ ] Works on slower connections

---

## Content Testing

### Sociology Accuracy:
- [ ] Terminology is correct (homogamy, LAT, second shift, etc.)
- [ ] Feedback references real research (Gottman, etc.)
- [ ] Childcare costs are realistic
- [ ] Crisis scenarios are plausible
- [ ] Policy references are accurate

### Tone and Inclusivity:
- [ ] Language is non-judgmental ("childfree" not "childless")
- [ ] Multiple family forms validated (single, LAT, childfree)
- [ ] No assumptions about gender in partnerships
- [ ] Crisis scenarios feel realistic, not punitive
- [ ] Feedback is educational, not preachy

---

## Student Experience Testing

### Gameplay Flow:
- [ ] Instructions are clear
- [ ] Estimated time per module feels accurate
- [ ] Decisions feel meaningful
- [ ] Consequences are clear
- [ ] Feedback connects to sociology
- [ ] Not boring or repetitive

### Learning Outcomes:
- [ ] Students see decision interconnections
- [ ] Structural constraints become visible
- [ ] Systems thinking emerges naturally
- [ ] Empathy builds for different paths
- [ ] Connects to Hammond textbook concepts

---

## Final Pre-Launch Checks

- [ ] No "Coming Soon" messages remain
- [ ] No TODO comments in code
- [ ] No console.log() debugging statements
- [ ] All modules unlock in proper sequence
- [ ] Export includes ALL 8 modules when complete
- [ ] File sizes reasonable (HTML < 500KB)
- [ ] README.md or instructions present
- [ ] GitHub repository is public
- [ ] GitHub Pages deployment successful
- [ ] Live URL works: https://amlw05.github.io/life-planning-challenge/
- [ ] Canvas links point to correct URL
- [ ] Game reflection assignment rubrics created in Canvas

---

## Rollback Plan

If critical bugs found after launch:

1. **Disable game temporarily:** Add alert at top saying "Undergoing maintenance"
2. **Fix bug in local copy**
3. **Test fix thoroughly**
4. **Redeploy to GitHub Pages**
5. **Verify live site works**
6. **Notify students via Canvas announcement**

---

## Testing Sign-Off

**Tested by:** _____________________
**Date:** _____________________
**Browser(s) used:** _____________________
**Critical issues found:** _____________________
**Ready for student use:** ☐ YES  ☐ NO

---

## Known Non-Critical Issues

Document any minor issues that don't block launch:

1.
2.
3.

---

**End of Testing Checklist**

*Last updated: January 28, 2026*
