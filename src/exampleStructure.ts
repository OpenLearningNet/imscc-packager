import { Course, Page } from "./imscc/types";

export const COURSE: Course = {
  title: "Course Title",
  description: "Course description",
  modules: [
    {
      title: "Module 1",
      pages: [
        {
          title: "Page 1",
          type: "webcontent",
          content:
            "<p>This is the content of a page with an image: <img src='$FOO' alt='foo' /></p>\n",
          attachments: [
            {
              placeholder: "$FOO",
              filename: "foo.png",
              base64:
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAc1JREFUOE+Nk8tLW1EQxr851WiqCIoLBWvQqBjFFvFtVSgVVz5CjLhwU1zoyp10VUpEXGj/hHaj0FVI8WqxdVFEKYKIRMUH4k0UbX2kKM0i+IjeKbk18XUizuIcmJnzm5nvMIQrG2/aexqMD7yI5Zi4sE92a8zH7qKRFYfDoYXiFDoUu8cG4BMYyQ89DscItCT4ia3xi8lLE+075uBFcBXAg5Xvg9nd7DKX0Jjd28vMH2SVLTXfcbxnwqHXIm3MICifxlo9fQy8v5sRYzhDQ/cAjnazMTf6Rgog1qqiAgpqvyGnbBrMhFlnF45+Zd2DSAFEDHPpNApqJgFi/dH5SQLmv3bo3dy02wBi5JVPIcOyiMQUn0Qzgm8nB1vu6ogmtwAkNFRYh5GaqUKIS+nMwVMj1IU6bM690uPSEeIT/Xj+WkGaeS0CYRbYmK2HulAL7SI24o8qYkiHspYRpGWv68nLP6zYXqp8nIjhLGPSX9R3DsH/Jx0zn3uif6NiU9+BqF+WUW3/iH1PoS6cdC+EKCbFpr4E0c8oJQDW10VmB2fi1BRepkEw3j5mkf7LjwCz1mp15U5G8ONt3nJm1DH4WmYJkQA/kUFpcj77HQr/A3AIxMbxXi7mAAAAAElFTkSuQmCC",
            },
          ],
        },
        {
          title: "Page 2",
          type: "discussion",
          content: "<p>This is an area to discuss things</p>\n",
        },
      ],
    },
    {
      title: "Module 2",
      pages: [
        {
          title: "Page 3",
          type: "webcontent",
          content:
            '<p>Another page in another module</p><div class="container">this is a container</div>\n',
        },
      ],
    },
  ],
};

export const PAGE: Page = {
  title: "Quiz Generated From CourseMagic",
  type: "assessment",
  content: [
    {
      title: "Section 1",
      type: "short_answer_question",
      point: 5,
      question: `<p><strong>What</strong> is <em>the</em> <span style="text-decoration: underline;">capital</span> of <span style="color: #e67e23;">France</span>?</p>`,
      answers: [{ text: "Paris" }],
    },
    {
      title: "Section 2",
      type: "multiple_choice_question",
      point: 10,
      question: "What is the capital of France?",
      selection: "single",
      choices: [
        { text: "New Delhi", feedback: "wrong" },
        { text: "Paris", feedback: "correct", isCorrect: true },
      ],
    },
    {
      title: "Section 3",
      type: "multiple_answers_question",
      point: 1,
      question: "What is the ingredient of a spaghetti?",
      selection: "multiple",
      choices: [
        { text: "tomato", feedback: "correct", isCorrect: true },
        { text: "pasta", feedback: "correct", isCorrect: true },
        { text: "paprika", feedback: "correct", isCorrect: true },
        { text: "coconut", feedback: "wrong" },
        { text: "tamarind", feedback: "wrong" },
      ],
    },
    {
      title: "Section 4",
      type: "matching_question",
      point: 1,
      question: "Match the color with the ingredient!",
      matches: [
        {
          pair: [
            { text: "tomato", feedback: "correct" },
            { text: "red", feedback: "correct" },
          ],
        },
        {
          pair: [
            { text: "pasta", feedback: "correct" },
            { text: "white", feedback: "correct" },
          ],
        },
        {
          pair: [
            { text: "paprika", feedback: "correct" },
            { text: "green", feedback: "correct" },
          ],
        },
        {
          pair: [
            { text: "coconut", feedback: "wrong" },
            { text: "yellow", feedback: "wrong" },
          ],
        },
        {
          pair: [
            { text: "tamarind", feedback: "wrong" },
            { text: "orange", feedback: "wrong" },
          ],
        },
      ],
    },
    {
      title: "Section 5",
      type: "numerical_question",
      point: 5,
      question: "Name an even number that is less than 15?",
      answers: [
        { text: "2" },
        { text: "4" },
        { text: "6" },
        { text: "8" },
        { text: "10" },
        { text: "12" },
        { text: "14" },
      ],
    },
  ],
  attachments: [],
};
