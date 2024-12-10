import { getRandomNumberInRange } from "../../../../common";
import { Section } from "../../../../types";
import {
  multipleChoiceQuestionAnswer,
  matchingQuestionAnswer,
  numericalQuestionAnswer,
  multipleAnswersQuestionAnswer,
  shortAnswerQuestionAnswer,
} from "./moodleAnswer";

export function sectionsToMoodleQuestionBank({
  sections,
  questionCategoryId,
  questionCategoryName,
  questionCateogryInfo,
}: {
  sections: Section[];
  questionCategoryId: string;
  questionCategoryName: string;
  questionCateogryInfo: string;
}) {
  let questionBankEntries = "";
  for (let section of sections) {
    switch (section.type) {
      case "multiple_choice_question":
        questionBankEntries += multipleChoiceQuestion({
          quiz: section,
          questionVersionId: getRandomNumberInRange(1, 1000).toString(),
          questionBankEntryId: getRandomNumberInRange(1, 1000).toString(),
          questioncategoryid: questionCategoryId,
        });
        break;
      case "multiple_answers_question":
        questionBankEntries += multipleAnswersQuestion({
          quiz: section,
          questionVersionId: getRandomNumberInRange(1, 1000).toString(),
          questionBankEntryId: getRandomNumberInRange(1, 1000).toString(),
        });
        break;
      case "matching_question":
        questionBankEntries += matchingQuestion({
          quiz: section,
          questionVersionId: getRandomNumberInRange(1, 1000).toString(),
          questionBankEntryId: getRandomNumberInRange(1, 1000).toString(),
        });
        break;
      case "numerical_question":
        questionBankEntries += numericalQuestion({
          quiz: section,
          questionVersionId: getRandomNumberInRange(1, 1000).toString(),
          questionBankEntryId: getRandomNumberInRange(1, 1000).toString(),
        });
        break;
      case "short_answer_question":
        questionBankEntries += shortAnswerQuestion({
          quiz: section,
          questionVersionId: getRandomNumberInRange(1, 1000).toString(),
          questionBankEntryId: getRandomNumberInRange(1, 1000).toString(),
        });
        break;
      case "text_only_question":
        questionBankEntries += textOnlyQuestion({
          quiz: section,
          questionVersionId: getRandomNumberInRange(1, 1000).toString(),
          questionBankEntryId: getRandomNumberInRange(1, 1000).toString(),
        });
        break;
      default:
        continue;
    }
  }
  return moodleQuestionBank({
    questionCategoryId: questionCategoryId,
    questionCategoryName: questionCategoryName,
    questionCateogryInfo: questionCateogryInfo,
    questionBankEntries: questionBankEntries,
  });
}

function moodleQuestionBank({
  questionCategoryId,
  questionCategoryName,
  questionCateogryInfo,
  questionBankEntries,
}: {
  questionCategoryId: string;
  questionCategoryName: string;
  questionCateogryInfo: string;
  questionBankEntries: string;
}) {
  return `
<?xml version="1.0" encoding="UTF-8"?>
<question_categories>
  <question_category id="${questionCategoryId}">
    <name>${questionCategoryName}</name>
    <contextid>${getRandomNumberInRange(1000, 9999)}</contextid>
    <contextlevel>50</contextlevel>
    <contextinstanceid>36</contextinstanceid>
    <info>${questionCateogryInfo}</info>
    <infoformat>0</infoformat>
    <stamp>coursemagic</stamp>
    <parent>45</parent>
    <sortorder>999</sortorder>
    <idnumber>$@NULL@$</idnumber>
    <question_bank_entries>
    ${questionBankEntries}
    </question_bank_entries>
  </question_category>
</question_categories>`;
}

function multipleChoiceQuestion({
  quiz,
  questionVersionId,
  questionBankEntryId,
  questioncategoryid,
}: {
  quiz: Section;
  questionVersionId: string;
  questionBankEntryId: string;
  questioncategoryid: string;
}) {
  return `
    <question_bank_entry id="${questionBankEntryId}">
        <questioncategoryid>${questioncategoryid}}</questioncategoryid>
        <idnumber>$@NULL@$</idnumber>
        <ownerid>2</ownerid>
        <question_version>
          <question_versions id="${questionVersionId}">
            <version>1</version>
            <status>ready</status>
            <questions>
              <question id="${questionVersionId}">
                <parent>0</parent>
                <name>${quiz.title}</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>${quiz.point
                  ?.toPrecision(7)
                  .toString()}</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>multichoice</qtype>
                <length>1</length>
                <stamp>coursemagic</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_multichoice_question>
                  <answers>
                  ${multipleChoiceQuestionAnswer({
                    choices: quiz.choices,
                    answerId: "1",
                    score: quiz.point ?? 1,
                  })}
                  </answers>
                  <multichoice id="17">
                    <layout>0</layout>
                    <single>1</single>
                    <shuffleanswers>1</shuffleanswers>
                    <correctfeedback>&lt;p&gt;Your answer is correct.&lt;/p&gt;</correctfeedback>
                    <correctfeedbackformat>1</correctfeedbackformat>
                    <partiallycorrectfeedback>&lt;p&gt;Your answer is partially correct.&lt;/p&gt;</partiallycorrectfeedback>
                    <partiallycorrectfeedbackformat>1</partiallycorrectfeedbackformat>
                    <incorrectfeedback>&lt;p&gt;Your answer is incorrect.&lt;/p&gt;</incorrectfeedback>
                    <incorrectfeedbackformat>1</incorrectfeedbackformat>
                    <answernumbering>ABCD</answernumbering>
                    <shownumcorrect>1</shownumcorrect>
                    <showstandardinstruction>0</showstandardinstruction>
                  </multichoice>
                </plugin_qtype_multichoice_question>
                <plugin_qbank_comment_question>
                  <comments>
                  </comments>
                </plugin_qbank_comment_question>
                <plugin_qbank_customfields_question>
                  <customfields>
                  </customfields>
                </plugin_qbank_customfields_question>
                <question_hints>
                </question_hints>
                <tags>
                </tags>
              </question>
            </questions>
          </question_versions>
        </question_version>
    </question_bank_entry>`;
}

function matchingQuestion({
  quiz,
  questionVersionId,
  questionBankEntryId,
}: {
  quiz: Section;
  questionVersionId: string;
  questionBankEntryId: string;
}) {
  return `
      <question_bank_entry id="${questionBankEntryId}">
        <questioncategoryid>999</questioncategoryid>
        <idnumber>$@NULL@$</idnumber>
        <ownerid>2</ownerid>
        <question_version>
          <question_versions id="${questionVersionId}">
            <version>1</version>
            <status>ready</status>
            <questions>
              <question id="${questionVersionId}">
                <parent>0</parent>
                <name>${quiz.title}</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>${quiz.point
                  ?.toPrecision(7)
                  .toString()}</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>match</qtype>
                <length>1</length>
                <stamp>coursemagic</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_match_question>
                  <matchoptions id="7">
                    <shuffleanswers>1</shuffleanswers>
                    <correctfeedback>&lt;p&gt;Your answer is correct.&lt;/p&gt;</correctfeedback>
                    <correctfeedbackformat>1</correctfeedbackformat>
                    <partiallycorrectfeedback>&lt;p&gt;Your answer is partially correct.&lt;/p&gt;</partiallycorrectfeedback>
                    <partiallycorrectfeedbackformat>1</partiallycorrectfeedbackformat>
                    <incorrectfeedback>&lt;p&gt;Your answer is incorrect.&lt;/p&gt;</incorrectfeedback>
                    <incorrectfeedbackformat>1</incorrectfeedbackformat>
                    <shownumcorrect>1</shownumcorrect>
                  </matchoptions>
                  <matches>
                  ${matchingQuestionAnswer({
                    matches: quiz.matches,
                    answerId: "1",
                  })}
                  </matches>
                </plugin_qtype_match_question>
                <plugin_qbank_comment_question>
                  <comments>
                  </comments>
                </plugin_qbank_comment_question>
                <plugin_qbank_customfields_question>
                  <customfields>
                  </customfields>
                </plugin_qbank_customfields_question>
                <question_hints>
                </question_hints>
                <tags>
                </tags>
              </question>
            </questions>
          </question_versions>
        </question_version>
      </question_bank_entry>`;
}

function numericalQuestion({
  quiz,
  questionVersionId,
  questionBankEntryId,
}: {
  quiz: Section;
  questionVersionId: string;
  questionBankEntryId: string;
}) {
  return `
       <question_bank_entry id="${questionBankEntryId}">
        <questioncategoryid>46</questioncategoryid>
        <idnumber>$@NULL@$</idnumber>
        <ownerid>2</ownerid>
        <question_version>
          <question_versions id="${questionVersionId}">
            <version>1</version>
            <status>ready</status>
            <questions>
              <question id="${questionVersionId}">
                <parent>0</parent>
                <name>${quiz.title}</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>${quiz.point
                  ?.toPrecision(7)
                  .toString()}</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>numerical</qtype>
                <length>1</length>
                <stamp>coursemagic</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_numerical_question>
                  <answers>
                  ${numericalQuestionAnswer({
                    answers: quiz.answers,
                    answerId: "1",
                  })}
                  </answers>
                  <numerical_units>
                  </numerical_units>
                  <numerical_options>
                    <numerical_option id="5">
                      <showunits>3</showunits>
                      <unitsleft>0</unitsleft>
                      <unitgradingtype>0</unitgradingtype>
                      <unitpenalty>0.1000000</unitpenalty>
                    </numerical_option>
                  </numerical_options>
                  <numerical_records>
                    <numerical_record id="6">
                      <answer>106</answer>
                      <tolerance>0</tolerance>
                    </numerical_record>
                    <numerical_record id="7">
                      <answer>107</answer>
                      <tolerance>0</tolerance>
                    </numerical_record>
                    <numerical_record id="8">
                      <answer>108</answer>
                      <tolerance>0</tolerance>
                    </numerical_record>
                  </numerical_records>
                </plugin_qtype_numerical_question>
                <plugin_qbank_comment_question>
                  <comments>
                  </comments>
                </plugin_qbank_comment_question>
                <plugin_qbank_customfields_question>
                  <customfields>
                  </customfields>
                </plugin_qbank_customfields_question>
                <question_hints>
                </question_hints>
                <tags>
                </tags>
              </question>
            </questions>
          </question_versions>
        </question_version>
      </question_bank_entry>`;
}

function multipleAnswersQuestion({
  quiz,
  questionVersionId,
  questionBankEntryId,
}: {
  quiz: Section;
  questionVersionId: string;
  questionBankEntryId: string;
}) {
  return `      
       <question_bank_entry id="${questionBankEntryId}">
        <questioncategoryid>46</questioncategoryid>
        <idnumber>$@NULL@$</idnumber>
        <ownerid>2</ownerid>
        <question_version>
          <question_versions id="${questionVersionId}">
            <version>1</version>
            <status>ready</status>
            <questions>
              <question id="${questionVersionId}">
                <parent>0</parent>
                <name>Multiple choice multiple answers</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>${quiz.point
                  ?.toPrecision(7)
                  .toString()}</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>multichoice</qtype>
                <length>1</length>
                <stamp>coursemagic</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_multichoice_question>
                  <answers>
                  ${multipleAnswersQuestionAnswer({
                    choices: quiz.choices,
                    answerId: "1",
                    score: quiz.point ?? 1,
                  })}
                  </answers>
                  <multichoice id="21">
                    <layout>0</layout>
                    <single>0</single>
                    <shuffleanswers>1</shuffleanswers>
                    <correctfeedback>&lt;p&gt;Your answer is correct.&lt;/p&gt;</correctfeedback>
                    <correctfeedbackformat>1</correctfeedbackformat>
                    <partiallycorrectfeedback>&lt;p&gt;Your answer is partially correct.&lt;/p&gt;</partiallycorrectfeedback>
                    <partiallycorrectfeedbackformat>1</partiallycorrectfeedbackformat>
                    <incorrectfeedback>&lt;p&gt;Your answer is incorrect.&lt;/p&gt;</incorrectfeedback>
                    <incorrectfeedbackformat>1</incorrectfeedbackformat>
                    <answernumbering>ABCD</answernumbering>
                    <shownumcorrect>1</shownumcorrect>
                    <showstandardinstruction>0</showstandardinstruction>
                  </multichoice>
                </plugin_qtype_multichoice_question>
                <plugin_qbank_comment_question>
                  <comments>
                  </comments>
                </plugin_qbank_comment_question>
                <plugin_qbank_customfields_question>
                  <customfields>
                  </customfields>
                </plugin_qbank_customfields_question>
                <question_hints>
                </question_hints>
                <tags>
                </tags>
              </question>
            </questions>
          </question_versions>
        </question_version>
      </question_bank_entry>`;
}

function shortAnswerQuestion({
  quiz,
  questionVersionId,
  questionBankEntryId,
}: {
  quiz: Section;
  questionVersionId: string;
  questionBankEntryId: string;
}) {
  return `
      <question_bank_entry id="${questionBankEntryId}">
        <questioncategoryid>999</questioncategoryid>
        <idnumber>$@NULL@$</idnumber>
        <ownerid>2</ownerid>
        <question_version>
          <question_versions id="${questionVersionId}">
            <version>1</version>
            <status>ready</status>
            <questions>
              <question id="${questionVersionId}">
                <parent>0</parent>
                <name>Judul short answer</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>${quiz.point
                  ?.toPrecision(7)
                  .toString()}</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>shortanswer</qtype>
                <length>1</length>
                <stamp>coursemagic</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_shortanswer_question>
                  <answers>
                  ${shortAnswerQuestionAnswer({
                    answers: quiz.answers,
                    answerId: "1",
                  })}
                  </answers>
                  <shortanswer id="5">
                    <usecase>0</usecase>
                  </shortanswer>
                </plugin_qtype_shortanswer_question>
                <plugin_qbank_comment_question>
                  <comments>
                  </comments>
                </plugin_qbank_comment_question>
                <plugin_qbank_customfields_question>
                  <customfields>
                  </customfields>
                </plugin_qbank_customfields_question>
                <question_hints>
                </question_hints>
                <tags>
                </tags>
              </question>
            </questions>
          </question_versions>
        </question_version>
      </question_bank_entry>`;
}

function textOnlyQuestion({
  quiz,
  questionVersionId,
  questionBankEntryId,
}: {
  quiz: Section;
  questionVersionId: string;
  questionBankEntryId: string;
}) {
  return `
       <question_bank_entry id="${questionBankEntryId}">
        <questioncategoryid>46</questioncategoryid>
        <idnumber>$@NULL@$</idnumber>
        <ownerid>2</ownerid>
        <question_version>
          <question_versions id="${questionVersionId}">
            <version>1</version>
            <status>ready</status>
            <questions>
              <question id="${questionVersionId}">
                <parent>0</parent>
                <name>${quiz.title}</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>0.0000000</defaultmark>
                <penalty>0.0000000</penalty>
                <qtype>description</qtype>
                <length>0</length>
                <stamp>coursemagic</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qbank_comment_question>
                  <comments>
                  </comments>
                </plugin_qbank_comment_question>
                <plugin_qbank_customfields_question>
                  <customfields>
                  </customfields>
                </plugin_qbank_customfields_question>
                <question_hints>
                </question_hints>
                <tags>
                </tags>
              </question>
            </questions>
          </question_versions>
        </question_version>
      </question_bank_entry>`;
}
