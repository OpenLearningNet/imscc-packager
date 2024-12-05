import { Section } from "../../../../types";
import { multipleChoiceQuestionAnswer } from "./moodleAnswer";

export function multipleChoiceQuestion({
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
                <defaultmark>1.0000000</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>multichoice</qtype>
                <length>1</length>
                <stamp></stamp>
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

export function matchingQuestion({
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
                <name>Judul matching question</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>1.0000000</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>match</qtype>
                <length>1</length>
                <stamp></stamp>
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
                    <match id="19">
                      <questiontext>&lt;p&gt;isi pertanyaan 1&lt;/p&gt;</questiontext>
                      <questiontextformat>1</questiontextformat>
                      <answertext>jawaban pertanyaan 1</answertext>
                    </match>
                    <match id="20">
                      <questiontext>&lt;p&gt;isi pertanyaan 2&lt;/p&gt;</questiontext>
                      <questiontextformat>1</questiontextformat>
                      <answertext>jawaban pertanyaan 2</answertext>
                    </match>
                    <match id="21">
                      <questiontext>&lt;p&gt;isi pertanyaan 3&lt;/p&gt;</questiontext>
                      <questiontextformat>1</questiontextformat>
                      <answertext>jawaban pertanyaan 3</answertext>
                    </match>
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

export function numericalQuestion({
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
                <name>judul Numerical question</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>1.0000000</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>numerical</qtype>
                <length>1</length>
                <stamp>openlearning.moodlecloud.com+241128025017+C3VJ0k</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_numerical_question>
                  <answers>
                    <answer id="106">
                      <answertext>11</answertext>
                      <answerformat>0</answerformat>
                      <fraction>1.0000000</fraction>
                      <feedback>&lt;p&gt;Feedback Answer 1&lt;/p&gt;</feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="107">
                      <answertext>1</answertext>
                      <answerformat>0</answerformat>
                      <fraction>0.0000000</fraction>
                      <feedback>&lt;p&gt;Feedback Answer 2&lt;/p&gt;</feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="108">
                      <answertext>10</answertext>
                      <answerformat>0</answerformat>
                      <fraction>0.0000000</fraction>
                      <feedback>&lt;p&gt;Feedback Answer 3&lt;/p&gt;</feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
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

export function multipleAnswersQuestion({
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
                <defaultmark>1.0000000</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>multichoice</qtype>
                <length>1</length>
                <stamp>openlearning.moodlecloud.com+241205044613+4Cmdjq</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_multichoice_question>
                  <answers>
                    <answer id="154">
                      <answertext>&lt;p&gt;Choice 1&lt;/p&gt;</answertext>
                      <answerformat>1</answerformat>
                      <fraction>0.3333333</fraction>
                      <feedback></feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="155">
                      <answertext>&lt;p&gt;Choice 2&lt;/p&gt;</answertext>
                      <answerformat>1</answerformat>
                      <fraction>0.3333333</fraction>
                      <feedback></feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="156">
                      <answertext>&lt;p&gt;Choice 3&lt;/p&gt;</answertext>
                      <answerformat>1</answerformat>
                      <fraction>0.3333333</fraction>
                      <feedback></feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="157">
                      <answertext>&lt;p&gt;Choice 4&lt;/p&gt;</answertext>
                      <answerformat>1</answerformat>
                      <fraction>0.0000000</fraction>
                      <feedback></feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="158">
                      <answertext>&lt;p&gt;Choice 5&lt;/p&gt;</answertext>
                      <answerformat>1</answerformat>
                      <fraction>0.0000000</fraction>
                      <feedback></feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
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

export function shortAnswerQuestion({
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
                <defaultmark>1.0000000</defaultmark>
                <penalty>0.3333333</penalty>
                <qtype>shortanswer</qtype>
                <length>1</length>
                <stamp>openlearning.moodlecloud.com+241128024637+69TTEL</stamp>
                <timecreated>${Math.floor(Date.now() / 1000)}</timecreated>
                <timemodified>${Math.floor(Date.now() / 1000)}</timemodified>
                <createdby>2</createdby>
                <modifiedby>2</modifiedby>
                <plugin_qtype_shortanswer_question>
                  <answers>
                    <answer id="103">
                      <answertext>Answer 1</answertext>
                      <answerformat>0</answerformat>
                      <fraction>1.0000000</fraction>
                      <feedback>&lt;p&gt;Feedback Answer 1&lt;/p&gt;</feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="104">
                      <answertext>Answer 2</answertext>
                      <answerformat>0</answerformat>
                      <fraction>0.0000000</fraction>
                      <feedback>&lt;p&gt;Feedback Answer 2&lt;/p&gt;</feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
                    <answer id="105">
                      <answertext>Answer 3</answertext>
                      <answerformat>0</answerformat>
                      <fraction>0.0000000</fraction>
                      <feedback>&lt;p&gt;Feedback Answer 3&lt;/p&gt;</feedback>
                      <feedbackformat>1</feedbackformat>
                    </answer>
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

export function textOnlyQuestion({
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
                <name>Text Only Question</name>
                <questiontext>${quiz.question}</questiontext>
                <questiontextformat>1</questiontextformat>
                <generalfeedback></generalfeedback>
                <generalfeedbackformat>1</generalfeedbackformat>
                <defaultmark>0.0000000</defaultmark>
                <penalty>0.0000000</penalty>
                <qtype>description</qtype>
                <length>0</length>
                <stamp></stamp>
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
