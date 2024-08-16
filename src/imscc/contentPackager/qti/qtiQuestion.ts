import { MattexType, QtiQuestionType } from "../../types";
import {
  material,
  presentation,
  qtiMetadata,
  qtiMetadataField,
  renderChoice,
  responseLabel,
  responseLid,
} from "./qtiTag";

function generateId() {
  return crypto.randomUUID();
}

function generateQtiMetadataContent(questionType: string) {
  const questionTypeXml = qtiMetadataField("question_type", questionType);
  const pointsPossible = qtiMetadataField("points_possible", "1.0");
  const originalAnswerIds = qtiMetadataField("original_answer_ids", "1,2,3");
  const assessmentQuestionIdentifierRef = qtiMetadataField(
    "assessment_question_identifierref",
    generateId()
  );
  return (
    questionTypeXml +
    pointsPossible +
    originalAnswerIds +
    assessmentQuestionIdentifierRef
  );
}

function generateQtiMetadata(questionType: QtiQuestionType) {
  return qtiMetadata(generateQtiMetadataContent(questionType));
}

function generateItemMetadata(questionType: QtiQuestionType) {
  return generateQtiMetadata(questionType);
}

function generateMaterial(textType: MattexType, content: string) {
  const textTypeTag = `texttype="${textType}"`;
  return material(textTypeTag, content);
}

function generateResponseLid(responseLidTag: string) {
  const responseLidContent = renderChoice(
    generateResponseLabelFromQuizAnswers("asdf")
  );
  return responseLid(responseLidTag, responseLidContent);
}

function generateResponseLabelFromQuizAnswers(answers: any) {
  let result = "";
  for (const answer of answers) {
    const responseLabelContent = material("text/plain", answer);
    const responseLabelTag = `ident="${generateId()}"`;
    result += responseLabel(responseLabelTag, responseLabelContent);
  }
  return result;
}

function generatePresentation(materialContent: string, responseLidTag: string) {
  const presentationContent =
    generateMaterial("text/html", "") + generateResponseLid(responseLidTag);
  return presentation(presentationContent);
}

/*
    <item ident="g2018b19fd9d88ce3e6a21a5af5eeda92" title="Question">
        <itemmetadata>
            <qtimetadata>
                <qtimetadatafield>
                    <fieldlabel>question_type</fieldlabel>
                    <fieldentry>multiple_choice_question</fieldentry>
                </qtimetadatafield>
                <qtimetadatafield>
                    <fieldlabel>points_possible</fieldlabel>
                    <fieldentry>1.0</fieldentry>
                </qtimetadatafield>
                <qtimetadatafield>
                    <fieldlabel>original_answer_ids</fieldlabel>
                    <fieldentry>9295,1,1666</fieldentry>
                </qtimetadatafield>
                <qtimetadatafield>
                    <fieldlabel>assessment_question_identifierref</fieldlabel>
                    <fieldentry>g8550f186319707a8a16a87d750e961ab</fieldentry>
                </qtimetadatafield>
            </qtimetadata>
        </itemmetadata>
        <presentation>
            <material>
                <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;This is the question, what is the answer?&lt;/p&gt;&lt;/div&gt;</mattext>
            </material>
            <response_lid ident="response1" rcardinality="Single">
                <render_choice>
                    <response_label ident="9295">
                        <material>
                            <mattext texttype="text/plain">This is the correct answer, choose me!</mattext>
                        </material>
                    </response_label>
                    <response_label ident="1">
                        <material>
                            <mattext texttype="text/plain">This might the correct answer (but it isn't)</mattext>
                        </material>
                    </response_label>
                    <response_label ident="1666">
                        <material>
                            <mattext texttype="text/plain">Another answer, because why not?</mattext>
                        </material>
                    </response_label>
                </render_choice>
            </response_lid>
        </presentation>
        <resprocessing>
            <outcomes>
                <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
            </outcomes>
            <respcondition continue="Yes">
                <conditionvar>
                    <varequal respident="response1">9295</varequal>
                </conditionvar>
                <displayfeedback feedbacktype="Response" linkrefid="9295_fb"/>
            </respcondition>
            <respcondition continue="Yes">
                <conditionvar>
                    <varequal respident="response1">1</varequal>
                </conditionvar>
                <displayfeedback feedbacktype="Response" linkrefid="1_fb"/>
            </respcondition>
            <respcondition continue="Yes">
                <conditionvar>
                    <varequal respident="response1">1666</varequal>
                </conditionvar>
                <displayfeedback feedbacktype="Response" linkrefid="1666_fb"/>
            </respcondition>
            <respcondition continue="No">
                <conditionvar>
                    <varequal respident="response1">9295</varequal>
                </conditionvar>
                <setvar action="Set" varname="SCORE">100</setvar>
            </respcondition>
        </resprocessing>
        <itemfeedback ident="9295_fb">
            <flow_mat>
                <material>
                    <mattext texttype="text/html">&lt;p&gt;Yay you chose the correct answer!&lt;/p&gt;</mattext>
                </material>
            </flow_mat>
        </itemfeedback>
        <itemfeedback ident="1_fb">
            <flow_mat>
                <material>
                    <mattext texttype="text/html">&lt;p&gt;Nope, you should have believed me&lt;/p&gt;</mattext>
                </material>
            </flow_mat>
        </itemfeedback>
        <itemfeedback ident="1666_fb">
            <flow_mat>
                <material>
                    <mattext texttype="text/html">&lt;p&gt;You chose this one? NOPE&lt;/p&gt;</mattext>
                </material>
            </flow_mat>
        </itemfeedback>
    </item>
*/
export function multipleChoiceQuestion({
  itemId,
  pointsPossible,
  children,
}: {
  itemId: string;
  pointsPossible: string;
  children: Element;
}) {
  console.log(itemId, pointsPossible, children);
}

/*
<item ident="g3d7b65d50738a0361d96e87b6f82327d" title="Question">
    <itemmetadata>
        <qtimetadata>
            <qtimetadatafield>
                <fieldlabel>question_type</fieldlabel>
                <fieldentry>matching_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>points_possible</fieldlabel>
                <fieldentry>1.0</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>original_answer_ids</fieldlabel>
                <fieldentry>9485,9037,5366</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>assessment_question_identifierref</fieldlabel>
                <fieldentry>gbbb3d5c483aafdb4c50737b51b074f75</fieldentry>
            </qtimetadatafield>
        </qtimetadata>
    </itemmetadata>
    <presentation>
        <material>
            <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;Match the stuff with other stuff&lt;/p&gt;&lt;/div&gt;</mattext>
        </material>
        <response_lid ident="response_9485">
            <material>
                <mattext texttype="text/plain">Cat</mattext>
            </material>
            <render_choice>
                <response_label ident="639">
                    <material>
                        <mattext>meow</mattext>
                    </material>
                </response_label>
                <response_label ident="5101">
                    <material>
                        <mattext>woof</mattext>
                    </material>
                </response_label>
                <response_label ident="6912">
                    <material>
                        <mattext>nyannaannananynyananynynaynanya</mattext>
                    </material>
                </response_label>
            </render_choice>
        </response_lid>
        <response_lid ident="response_9037">
            <material>
                <mattext texttype="text/plain">Dog</mattext>
            </material>
            <render_choice>
                <response_label ident="639">
                    <material>
                        <mattext>meow</mattext>
                    </material>
                </response_label>
                <response_label ident="5101">
                    <material>
                        <mattext>woof</mattext>
                    </material>
                </response_label>
                <response_label ident="6912">
                    <material>
                        <mattext>nyannaannananynyananynynaynanya</mattext>
                    </material>
                </response_label>
            </render_choice>
        </response_lid>
        <response_lid ident="response_5366">
            <material>
                <mattext texttype="text/plain">Fox</mattext>
            </material>
            <render_choice>
                <response_label ident="639">
                    <material>
                        <mattext>meow</mattext>
                    </material>
                </response_label>
                <response_label ident="5101">
                    <material>
                        <mattext>woof</mattext>
                    </material>
                </response_label>
                <response_label ident="6912">
                    <material>
                        <mattext>nyannaannananynyananynynaynanya</mattext>
                    </material>
                </response_label>
            </render_choice>
        </response_lid>
    </presentation>
    <resprocessing>
        <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
        </outcomes>
        <respcondition>
            <conditionvar>
                <varequal respident="response_9485">639</varequal>
            </conditionvar>
            <setvar varname="SCORE" action="Add">33.33</setvar>
        </respcondition>
        <respcondition>
            <conditionvar>
                <varequal respident="response_9037">5101</varequal>
            </conditionvar>
            <setvar varname="SCORE" action="Add">33.33</setvar>
        </respcondition>
        <respcondition>
            <conditionvar>
                <varequal respident="response_5366">6912</varequal>
            </conditionvar>
            <setvar varname="SCORE" action="Add">33.33</setvar>
        </respcondition>
    </resprocessing>
</item>
*/
export function matchingQuestion() {}

/*
<item ident="g1072bc03221aa98d204b0f107cb857e2" title="Question">
    <itemmetadata>
        <qtimetadata>
            <qtimetadatafield>
                <fieldlabel>question_type</fieldlabel>
                <fieldentry>numerical_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>points_possible</fieldlabel>
                <fieldentry>1.0</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>original_answer_ids</fieldlabel>
                <fieldentry>3589,6911,3080,9526</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>assessment_question_identifierref</fieldlabel>
                <fieldentry>gbb2ad60ab57e39fa84973f78e6605868</fieldentry>
            </qtimetadatafield>
        </qtimetadata>
    </itemmetadata>
    <presentation>
        <material>
            <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;The answer is 42, no really... trust me. What do you think it is?&lt;/p&gt;&lt;/div&gt;</mattext>
        </material>
        <response_str ident="response1" rcardinality="Single">
            <render_fib fibtype="Decimal">
                <response_label ident="answer1"/>
            </render_fib>
        </response_str>
    </presentation>
    <resprocessing>
        <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
        </outcomes>
        <respcondition continue="No">
            <conditionvar>
                <or>
                    <varequal respident="response1">42.0</varequal>
                    <and>
                        <vargte respident="response1">42.0</vargte>
                        <varlte respident="response1">42.0</varlte>
                    </and>
                </or>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
        </respcondition>
        <respcondition continue="No">
            <conditionvar>
                <or>
                    <varequal respident="response1">0.0</varequal>
                    <and>
                        <vargte respident="response1">0.0</vargte>
                        <varlte respident="response1">0.0</varlte>
                    </and>
                </or>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
        </respcondition>
        <respcondition continue="No">
            <conditionvar>
                <or>
                    <varequal respident="response1">0.0</varequal>
                    <and>
                        <vargte respident="response1">0.0</vargte>
                        <varlte respident="response1">0.0</varlte>
                    </and>
                </or>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
        </respcondition>
        <respcondition continue="No">
            <conditionvar>
                <or>
                    <varequal respident="response1">0.0</varequal>
                    <and>
                        <vargte respident="response1">0.0</vargte>
                        <varlte respident="response1">0.0</varlte>
                    </and>
                </or>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
        </respcondition>
    </resprocessing>
</item>
*/
export function numericalQuestion() {}

/*
<item ident="g40c8e21454b58a6e82cb53d534500c0f" title="Question">
    <itemmetadata>
        <qtimetadata>
            <qtimetadatafield>
                <fieldlabel>question_type</fieldlabel>
                <fieldentry>multiple_answers_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>points_possible</fieldlabel>
                <fieldentry>1.0</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>original_answer_ids</fieldlabel>
                <fieldentry>2807,1752,5172</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>assessment_question_identifierref</fieldlabel>
                <fieldentry>g52ac50c1fd1976829172852b3f2154de</fieldentry>
            </qtimetadatafield>
        </qtimetadata>
    </itemmetadata>
    <presentation>
        <material>
            <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;Multiple choice with multiple answers. A and B are correct.&lt;/p&gt;&lt;/div&gt;</mattext>
        </material>
        <response_lid ident="response1" rcardinality="Multiple">
            <render_choice>
                <response_label ident="2807">
                    <material>
                        <mattext texttype="text/html">&lt;p&gt;&lt;strong&gt;A&lt;/strong&gt;&lt;/p&gt;</mattext>
                    </material>
                </response_label>
                <response_label ident="1752">
                    <material>
                        <mattext texttype="text/plain">B</mattext>
                    </material>
                </response_label>
                <response_label ident="5172">
                    <material>
                        <mattext texttype="text/plain">C</mattext>
                    </material>
                </response_label>
            </render_choice>
        </response_lid>
    </presentation>
    <resprocessing>
        <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
        </outcomes>
        <respcondition continue="No">
            <conditionvar>
                <and>
                    <varequal respident="response1">2807</varequal>
                    <varequal respident="response1">1752</varequal>
                    <not>
                        <varequal respident="response1">5172</varequal>
                    </not>
                </and>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
        </respcondition>
    </resprocessing>
</item>
*/
export function multipleAnswersQuestion() {}

/*
<item ident="ge40bd95aae92d2c2c7c2e7da6711385d" title="Question">
    <itemmetadata>
        <qtimetadata>
            <qtimetadatafield>
                <fieldlabel>question_type</fieldlabel>
                <fieldentry>short_answer_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>points_possible</fieldlabel>
                <fieldentry>1.0</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>original_answer_ids</fieldlabel>
                <fieldentry>2768,8322</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
                <fieldlabel>assessment_question_identifierref</fieldlabel>
                <fieldentry>g46fdf3ec777b4029dad0e4f1957d3bb9</fieldentry>
            </qtimetadatafield>
        </qtimetadata>
    </itemmetadata>
    <presentation>
        <material>
            <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;This is a short answer question&lt;/p&gt;&lt;p&gt;&amp;nbsp;&lt;/p&gt;&lt;p&gt;answer with either cat or dog&lt;/p&gt;&lt;/div&gt;</mattext>
        </material>
        <response_str ident="response1" rcardinality="Single">
            <render_fib>
                <response_label ident="answer1" rshuffle="No"/>
            </render_fib>
        </response_str>
    </presentation>
    <resprocessing>
        <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
        </outcomes>
        <respcondition continue="No">
            <conditionvar>
                <varequal respident="response1">cat</varequal>
                <varequal respident="response1">dog</varequal>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
        </respcondition>
    </resprocessing>
</item>
*/
export function shortAnswerQuestion() {}
