export function quiz({
  activityId,
  activityTitle,
  questionInstances,
  quizContextId,
  totalScore,
}: {
  activityId: string;
  activityTitle: string;
  questionInstances: string;
  quizContextId: string;
  totalScore: string;
}) {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<activity id="${activityId}" moduleid="441" modulename="quiz" contextid="${quizContextId}">
  <quiz id="${activityId}">
    <name>${activityTitle}</name>
    <intro></intro>
    <introformat>1</introformat>
    <timeopen>0</timeopen>
    <timeclose>0</timeclose>
    <timelimit>0</timelimit>
    <overduehandling>autosubmit</overduehandling>
    <graceperiod>0</graceperiod>
    <preferredbehaviour>deferredfeedback</preferredbehaviour>
    <canredoquestions>0</canredoquestions>
    <attempts_number>0</attempts_number>
    <attemptonlast>0</attemptonlast>
    <grademethod>1</grademethod>
    <decimalpoints>2</decimalpoints>
    <questiondecimalpoints>-1</questiondecimalpoints>
    <reviewattempt>69888</reviewattempt>
    <reviewcorrectness>4352</reviewcorrectness>
    <reviewmaxmarks>69888</reviewmaxmarks>
    <reviewmarks>4352</reviewmarks>
    <reviewspecificfeedback>4352</reviewspecificfeedback>
    <reviewgeneralfeedback>4352</reviewgeneralfeedback>
    <reviewrightanswer>4352</reviewrightanswer>
    <reviewoverallfeedback>4352</reviewoverallfeedback>
    <questionsperpage>1</questionsperpage>
    <navmethod>free</navmethod>
    <shuffleanswers>1</shuffleanswers>
    <sumgrades>${totalScore}.00000</sumgrades>
    <grade>${totalScore}.00000</grade>
    <timecreated>1732517432</timecreated>
    <timemodified>1732762707</timemodified>
    <password></password>
    <subnet></subnet>
    <browsersecurity>-</browsersecurity>
    <delay1>0</delay1>
    <delay2>0</delay2>
    <showuserpicture>0</showuserpicture>
    <showblocks>0</showblocks>
    <completionattemptsexhausted>0</completionattemptsexhausted>
    <completionminattempts>0</completionminattempts>
    <allowofflineattempts>0</allowofflineattempts>
    <subplugin_quizaccess_seb_quiz>
    </subplugin_quizaccess_seb_quiz>
    <quiz_grade_items>
    </quiz_grade_items>
    ${questionInstances}
    <sections>
      <section id="${activityId}">
        <firstslot>1</firstslot>
        <heading></heading>
        <shufflequestions>0</shufflequestions>
      </section>
    </sections>
    <feedbacks>
      <feedback id="17">
        <feedbacktext></feedbacktext>
        <feedbacktextformat>1</feedbacktextformat>
        <mingrade>0.00000</mingrade>
        <maxgrade>11.00000</maxgrade>
      </feedback>
    </feedbacks>
    <overrides>
    </overrides>
    <grades>
    </grades>
    <attempts>
    </attempts>
  </quiz>
</activity>`;
}

/*
quizId is the activityId

<question_instance id="46">
<quizid>15</quizid>
<slot>1</slot>
<page>1</page>
<displaynumber>$@NULL@$</displaynumber>
<requireprevious>0</requireprevious>
<maxmark>1.0000000</maxmark>
<quizgradeitemid>$@NULL@$</quizgradeitemid>
<question_reference id="46">
  <usingcontextid>611</usingcontextid>
  <component>mod_quiz</component>
  <questionarea>slot</questionarea>
  <questionbankentryid>54</questionbankentryid>
  <version>$@NULL@$</version>
</question_reference>
</question_instance>
*/

export function quizQuestionInstance({
  questionId,
  quizId,
  quizContextId,
  questionBankEntryId,
  sequence,
}: {
  questionId: string;
  quizId: string;
  quizContextId: string;
  questionBankEntryId: string;
  sequence: string;
}) {
  return `
<question_instance id="${questionId}">
  <quizid>${quizId}</quizid>
  <slot>${sequence}</slot>
  <page>${sequence}</page>
  <displaynumber>$@NULL@$</displaynumber>
  <requireprevious>0</requireprevious>
  <maxmark>1.0000000</maxmark>
  <quizgradeitemid>$@NULL@$</quizgradeitemid>
  <question_reference id="${questionId}">
    <usingcontextid>${quizContextId}</usingcontextid>
    <component>mod_quiz</component>
    <questionarea>slot</questionarea>
    <questionbankentryid>${questionBankEntryId}</questionbankentryid>
    <version>$@NULL@$</version>
  </question_reference>
</question_instance>
  `;
}
