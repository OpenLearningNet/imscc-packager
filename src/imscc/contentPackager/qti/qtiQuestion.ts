import { Section } from "../../types";
import { item } from "./qtiTag";
import { generateItemMetadata } from "./section/itemMetadata";
import {
  generateMultipleChoiceQuestionPresentation,
  generateNumericalQuestionPresentation,
  generateShortAnswerQuestionPresentation,
} from "./section/presentation";
import {
  generateMultipleAnswersQuestionResprocessing,
  generateMultipleChoiceQuestionResprocessing,
  generateNumericalQuestionResprocessing,
  generateShortAnswerQuestionResprocessing,
} from "./section/resprocessing";

export function multipleChoiceQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateMultipleChoiceQuestionPresentation(quiz);
  let resprocessing = generateMultipleChoiceQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
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
export function matchingQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = "";
  let resprocessing = "";
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function numericalQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateNumericalQuestionPresentation(quiz);
  let resprocessing = generateNumericalQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function multipleAnswersQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateMultipleChoiceQuestionPresentation(quiz);
  let resprocessing = generateMultipleAnswersQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function shortAnswerQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateShortAnswerQuestionPresentation(quiz);
  let resprocessing = generateShortAnswerQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}
