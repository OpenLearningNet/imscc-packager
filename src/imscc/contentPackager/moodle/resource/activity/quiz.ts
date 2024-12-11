import { getRandomNumberInRange } from "../../../../common";

function questionInstance({
  questionId,
  quizId,
  sequence,
  quizContextId,
  questionBankEntryId,
}: {
  questionId: string;
  quizId: string;
  sequence: string;
  quizContextId: string;
  questionBankEntryId: string;
}) {
  return `<question_instance id="${questionId}">
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

function quiz({
  quizId,
  moduleId,
  activityTitle,
  questionInstances,
  quizContextId,
  totalScore,
}: {
  quizId: string;
  moduleId: string;
  activityTitle: string;
  questionInstances: string;
  quizContextId: string;
  totalScore: string;
}) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<activity id="${quizId}" moduleid="${moduleId}" modulename="quiz" contextid="${quizContextId}">
  <quiz id="${quizId}">
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
    <question_instances>
    ${questionInstances}
    </question_instances>
    <sections>
      <section id="${quizId}">
        <firstslot>1</firstslot>
        <heading></heading>
        <shufflequestions>0</shufflequestions>
      </section>
    </sections>
    <feedbacks>
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

export function generateMoodleQuiz({
  questionBankEntryIds,
  moduleId,
  quizContextId,
  quizId,
  activityTitle,
  totalScore,
}: {
  questionBankEntryIds: string[];
  moduleId: string;
  quizContextId: string;
  quizId: string;
  activityTitle: string;
  totalScore: string;
}) {
  let questionInstances = "";
  for (let i = 0; i < questionBankEntryIds.length; i++) {
    questionInstances += questionInstance({
      questionId: getRandomNumberInRange(1, 1000).toString(),
      quizId: quizId,
      quizContextId: quizContextId,
      questionBankEntryId: questionBankEntryIds[i],
      sequence: (i + 1).toString(),
    });
  }
  return quiz({
    questionInstances: questionInstances,
    totalScore: totalScore,
    quizId: quizId,
    moduleId: moduleId,
    activityTitle: activityTitle,
    quizContextId: quizContextId,
  });
}
