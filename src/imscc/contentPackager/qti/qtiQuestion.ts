import { Section } from "../../types";
import { item } from "./qtiTag";
import { generateItemFeedback } from "./section/itemFeedback";
import { generateItemMetadata } from "./section/itemMetadata";
import { generateMultipleChoiceQuestionPresentation } from "./section/presentation";
import {
  generateMultipleAnswersQuestionResprocessing,
  generateMultipleChoiceQuestionResprocessing,
} from "./section/resprocessing";

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
export function multipleChoiceQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateMultipleChoiceQuestionPresentation(quiz);
  let resprocessing = generateMultipleChoiceQuestionResprocessing(quiz);
  let itemFeedback = generateItemFeedback(quiz);
  let itemContent = itemMetadata + presentation + resprocessing + itemFeedback;
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
  let itemFeedback = "";
  let itemContent = itemMetadata + presentation + resprocessing + itemFeedback;
  return item(quiz.title, itemContent);
}

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
export function numericalQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = "";
  let resprocessing = "";
  let itemFeedback = "";
  let itemContent = itemMetadata + presentation + resprocessing + itemFeedback;
  return item(quiz.title, itemContent);
}
/*
<item ident="ge6f0c309839f3ec910a3cdebb78207ed" title="Multiple Answers Question">
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
				<fieldentry>4411,8453,4215,3983</fieldentry>
			</qtimetadatafield>
			<qtimetadatafield>
				<fieldlabel>assessment_question_identifierref</fieldlabel>
				<fieldentry>gf3071222e54d743fb89807bc0e997fa6</fieldentry>
			</qtimetadatafield>
		</qtimetadata>
	</itemmetadata>
	<presentation>
		<material>
			<mattext texttype="text/html">&lt;div&gt;&lt;p&gt;ini Multiple Answers Question&lt;/p&gt;&lt;/div&gt;</mattext>
		</material>
		<response_lid ident="response1" rcardinality="Multiple">
			<render_choice>
				<response_label ident="4411">
					<material>
						<mattext texttype="text/plain">bener</mattext>
					</material>
				</response_label>
				<response_label ident="8453">
					<material>
						<mattext texttype="text/plain">bener juga</mattext>
					</material>
				</response_label>
				<response_label ident="4215">
					<material>
						<mattext texttype="text/plain">bener bener juga</mattext>
					</material>
				</response_label>
				<response_label ident="3983">
					<material>
						<mattext texttype="text/plain">ini baru salah</mattext>
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
				<varequal respident="response1">4411</varequal>
			</conditionvar>
			<displayfeedback feedbacktype="Response" linkrefid="4411_fb"/>
		</respcondition>
		<respcondition continue="Yes">
			<conditionvar>
				<varequal respident="response1">8453</varequal>
			</conditionvar>
			<displayfeedback feedbacktype="Response" linkrefid="8453_fb"/>
		</respcondition>
		<respcondition continue="Yes">
			<conditionvar>
				<varequal respident="response1">4215</varequal>
			</conditionvar>
			<displayfeedback feedbacktype="Response" linkrefid="4215_fb"/>
		</respcondition>
		<respcondition continue="Yes">
			<conditionvar>
				<varequal respident="response1">3983</varequal>
			</conditionvar>
			<displayfeedback feedbacktype="Response" linkrefid="3983_fb"/>
		</respcondition>
		<respcondition continue="No">
			<conditionvar>
				<and>
					<varequal respident="response1">4411</varequal>
					<varequal respident="response1">8453</varequal>
					<varequal respident="response1">4215</varequal>
					<not>
						<varequal respident="response1">3983</varequal>
					</not>
				</and>
			</conditionvar>
			<setvar action="Set" varname="SCORE">100</setvar>
		</respcondition>
	</resprocessing>
	<itemfeedback ident="4411_fb">
		<flow_mat>
			<material>
				<mattext texttype="text/html">&lt;p&gt;komen kalo bener&lt;/p&gt;</mattext>
			</material>
		</flow_mat>
	</itemfeedback>
	<itemfeedback ident="8453_fb">
		<flow_mat>
			<material>
				<mattext texttype="text/html">&lt;p&gt;komen kalo bener&lt;/p&gt;</mattext>
			</material>
		</flow_mat>
	</itemfeedback>
	<itemfeedback ident="4215_fb">
		<flow_mat>
			<material>
				<mattext texttype="text/html">&lt;p&gt;komen kalo bener&lt;/p&gt;</mattext>
			</material>
		</flow_mat>
	</itemfeedback>
	<itemfeedback ident="3983_fb">
		<flow_mat>
			<material>
				<mattext texttype="text/html">&lt;p&gt;komen kalo salah&lt;/p&gt;</mattext>
			</material>
		</flow_mat>
	</itemfeedback>
</item>
*/
export function multipleAnswersQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateMultipleChoiceQuestionPresentation(quiz);
  let resprocessing = generateMultipleAnswersQuestionResprocessing(quiz);
  let itemFeedback = generateItemFeedback(quiz);
  let itemContent = itemMetadata + presentation + resprocessing + itemFeedback;
  return item(quiz.title, itemContent);
}
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
export function shortAnswerQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = "";
  let resprocessing = "";
  let itemFeedback = "";
  let itemContent = itemMetadata + presentation + resprocessing + itemFeedback;
  return item(quiz.title, itemContent);
}
