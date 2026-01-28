# Game Implementation Progress
**Date:** January 28, 2026

## COMPLETED ✅

### 1. Glossary System Created
**File:** `glossary-data.js` (40+ sociological terms)
- Module 1: 4 terms (nuclear family, extended family, chosen family, kinship)
- Module 2: 6 terms (gender socialization, doing gender, schemas, life course, etc.)
- Module 3: 4 terms (romantic love, attachment, emotional labor, Four Horsemen)
- Module 4: 4 terms (sexual scripts, homogamy, assortative mating, marriage market)
- Module 5: 4 terms (companionate marriage, cohabitation, marriage bar, deinstitutionalization)
- Module 6: 4 terms (intensive mothering, second shift, motherhood penalty, work-family conflict)
- Module 7: 3 terms (ABC-X model, resilience, divorce gap)
- Module 8: 3 terms (family policy, marriage promotion, systems thinking)

**Each term includes:**
- Definition
- Sociological context
- Hammond chapter reference
- Module assignment

### 2. Foundation Files Ready
- ✅ glossary-data.js created
- ✅ Original game backed up (index-ORIGINAL-BACKUP.html)
- ✅ Implementation specifications complete

## NEXT STEPS (In Priority Order)

### STEP 1: Add Glossary System to Game HTML
**File to edit:** `index.html`

**Actions:**
1. Add glossary-data.js script tag in head
2. Add glossary CSS for tooltips
3. Wrap key terms in game text with glossary spans

**CSS to add:**
```css
.glossary-term {
  border-bottom: 1px dotted #9b59b6;
  cursor: help;
  position: relative;
  font-weight: 500;
}

.glossary-term:hover {
  color: #8e44ad;
  border-bottom-color: #8e44ad;
}

/* Tooltip on hover */
.glossary-tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #2c3e50;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  width: 320px;
  font-size: 0.9em;
  line-height: 1.5;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  margin-bottom: 8px;
}

.glossary-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 8px solid transparent;
  border-top-color: #2c3e50;
}

.glossary-term:hover .glossary-tooltip {
  display: block;
}

.glossary-tooltip strong {
  display: block;
  margin-bottom: 6px;
  font-size: 1.1em;
  color: #9b59b6;
}

.glossary-tooltip em {
  display: block;
  margin-top: 8px;
  font-size: 0.85em;
  opacity: 0.8;
}
```

### STEP 2: Implement Module Locking System
**File to edit:** `index.html` (JavaScript section)

**Code to add after existing JavaScript:**
```javascript
// MODULE LOCKING SYSTEM
const moduleProgress = JSON.parse(localStorage.getItem('soc213-module-progress')) || {
  1: { unlocked: true, completed: false, dateStarted: null, dateCompleted: null },
  2: { unlocked: false, completed: false, dateStarted: null, dateCompleted: null },
  3: { unlocked: false, completed: false, dateStarted: null, dateCompleted: null },
  4: { unlocked: false, completed: false, dateStarted: null, dateCompleted: null },
  5: { unlocked: false, completed: false, dateStarted: null, dateCompleted: null },
  6: { unlocked: false, completed: false, dateStarted: null, dateCompleted: null },
  7: { unlocked: false, completed: false, dateStarted: null, dateCompleted: null },
  8: { unlocked: false, completed: false, dateStarted: null, dateCompleted: null }
};

function saveModuleProgress() {
  localStorage.setItem('soc213-module-progress', JSON.stringify(moduleProgress));
}

function isModuleUnlocked(moduleNum) {
  return moduleProgress[moduleNum].unlocked;
}

function startModule(moduleNum) {
  if (!isModuleUnlocked(moduleNum)) {
    alert(`⚠️ Module ${moduleNum} is Locked\n\nTo unlock this module, you must:\n✓ Complete Module ${moduleNum - 1} game decisions\n✓ Export your game data\n✓ Submit Module ${moduleNum - 1} Canvas reflection\n\nThis ensures systematic learning progression through the course.`);
    return false;
  }

  if (!moduleProgress[moduleNum].dateStarted) {
    moduleProgress[moduleNum].dateStarted = new Date().toISOString();
    saveModuleProgress();
  }

  return true;
}

function completeModule(moduleNum) {
  moduleProgress[moduleNum].completed = true;
  moduleProgress[moduleNum].dateCompleted = new Date().toISOString();

  // Unlock next module
  if (moduleNum < 8) {
    moduleProgress[moduleNum + 1].unlocked = true;
  }

  saveModuleProgress();

  // Show completion message
  showModuleCompletionModal(moduleNum);
}

function showModuleCompletionModal(moduleNum) {
  const nextModule = moduleNum + 1;
  const message = moduleNum < 8
    ? `✓ Module ${moduleNum} Completed!\n\n✓ Module ${nextModule} is now unlocked\n\nNext Steps:\n1. Export your game data (click button below)\n2. Submit Module ${moduleNum} Canvas reflection\n3. Return to continue Module ${nextModule}`
    : `✓ Module ${moduleNum} Completed!\n\n✓ You've finished all 8 modules!\n\nNext Steps:\n1. Export your complete game data\n2. Submit Module 8 final reflection\n3. Complete your "What IS Family?" portfolio project`;

  alert(message);
}

// Update module card rendering to show lock status
function updateModuleCards() {
  for (let i = 1; i <= 8; i++) {
    const card = document.getElementById(`module-${i}-card`);
    if (!card) continue;

    const status = moduleProgress[i];

    // Remove existing status classes
    card.classList.remove('locked', 'unlocked', 'completed');

    // Add appropriate class
    if (status.completed) {
      card.classList.add('completed');
      card.querySelector('.module-status').textContent = '✓ Completed';
    } else if (status.unlocked) {
      card.classList.add('unlocked');
      card.querySelector('.module-status').textContent = '▶️ Available';
    } else {
      card.classList.add('locked');
      card.querySelector('.module-status').textContent = '🔒 Locked';
    }
  }
}

// Call on page load
document.addEventListener('DOMContentLoaded', updateModuleCards);
```

**CSS to add for lock states:**
```css
.module-card.locked {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f5f5f5;
}

.module-card.locked:hover {
  transform: none;
  box-shadow: none;
  border-color: #e1e8ed;
}

.module-card.unlocked {
  border-color: #3498db;
  background: #fff;
}

.module-card.completed {
  border-color: #27ae60;
  background: #d4edda;
}

.module-status {
  font-size: 0.9em;
  margin-top: 8px;
  font-weight: 600;
}
```

### STEP 3: Add Print-Friendly PDF Export
**CSS to add (at end of stylesheet):**
```css
/* PRINT-FRIENDLY PDF STYLES */
@media print {
  /* Reset all colors */
  body, *, .header {
    background: white !important;
    color: black !important;
    border-color: #333 !important;
  }

  /* Remove unnecessary elements */
  .btn, .navigation, .module-select, .export-buttons-secondary {
    display: none !important;
  }

  /* Page break controls */
  .module-section {
    page-break-inside: avoid;
    page-break-after: auto;
  }

  h1, h2, h3 {
    page-break-after: avoid;
  }

  .decision-summary {
    page-break-inside: avoid;
    border: 2px solid #333;
    padding: 12px;
    margin: 15px 0;
  }

  /* Clean tables */
  table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
  }

  th, td {
    border: 1px solid #333;
    padding: 8px;
    text-align: left;
  }

  th {
    background: #f0f0f0 !important;
    font-weight: bold;
  }

  /* Header for print */
  .print-header {
    display: block !important;
    text-align: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #333;
  }

  /* Signature line */
  .print-signature {
    display: block !important;
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid #333;
  }

  /* Hide on screen, show only in print */
  @page {
    margin: 1in;
    size: letter portrait;
  }
}

/* Hide print-only elements on screen */
.print-header, .print-signature {
  display: none;
}

@media print {
  .print-header, .print-signature {
    display: block;
  }
}
```

**HTML to add for print header/footer:**
```html
<div class="print-header">
  <h1>Life Planning Challenge - Game Report</h1>
  <p><strong>SOC-213: Sociology of the Family</strong></p>
  <p>Student Name: ________________________________</p>
  <p>Export Date: <span id="print-date"></span></p>
  <p>Modules Completed: <span id="print-modules-completed"></span>/8</p>
</div>

<!-- At end of content -->
<div class="print-signature">
  <p><strong>Student Signature:</strong> ________________________________</p>
  <p><strong>Date Submitted:</strong> ________________________________</p>
  <p><strong>Canvas Assignment:</strong> Module ___ Game Reflection</p>
</div>

<script>
// Update print date when printing
window.addEventListener('beforeprint', function() {
  document.getElementById('print-date').textContent = new Date().toLocaleDateString();
  const completed = Object.values(moduleProgress).filter(m => m.completed).length;
  document.getElementById('print-modules-completed').textContent = completed;
});
</script>
```

## DEPLOYMENT CHECKLIST

Once enhanced game is complete:

- [ ] Test module locking (try to access Module 2 before completing Module 1)
- [ ] Test glossary tooltips (hover over terms)
- [ ] Test Print to PDF (check formatting, page breaks, black/white)
- [ ] Verify all 8 modules have decision points rewritten
- [ ] Check localStorage persistence (refresh page, progress maintained)
- [ ] Test on mobile (responsive design maintained)
- [ ] Commit to Git with descriptive message
- [ ] Push to GitHub Pages
- [ ] Wait 5 minutes for deployment
- [ ] Test live site

## TIME ESTIMATES FOR REMAINING WORK

- **Module 1 Decision Rewrites:** 2 hours (4 decisions × 30 min)
- **Modules 2-8 Decision Rewrites:** 14 hours (56 decisions × 15 min)
- **Integration & Testing:** 3 hours
- **Total Game Enhancement:** ~20 hours

**Then move to quiz questions (Module 2-8, 105 questions, ~28 hours)**

## NOTES

- Original game backed up as `index-ORIGINAL-BACKUP.html`
- All specifications in GAME-ENHANCEMENT-SPECIFICATION.md
- Glossary system ready to integrate
- Module locking code ready to add
- Print-friendly CSS ready to add

**Next session: Add these systems to index.html and begin Module 1 decision rewrites**
