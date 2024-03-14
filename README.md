# IMSCC Packager

Usage:

```
import { generateImscc } from '@openlearning/imscc-packager';

packageButton.addEventListener('click', async () => {
  const courseStructure = {
    title: "Course Title",
    description: "Course description",
    modules: [
      {
        title: "Module 1",
        pages: [
          {
            title: "Page 1",
            type: "webcontent",
            content: "<p>This is the content of a page with an image: <img src='$FOO' alt='foo' /></p>\n",
            attachments: [
              {
                placeholder: "$FOO",
                filename: "foo.png",
                // N.B. can use "blob" property with a Blob object instead of base64
                base64: "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAc1JREFUOE+Nk8tLW1EQxr851WiqCIoLBWvQqBjFFvFtVSgVVz5CjLhwU1zoyp10VUpEXGj/hHaj0FVI8WqxdVFEKYKIRMUH4k0UbX2kKM0i+IjeKbk18XUizuIcmJnzm5nvMIQrG2/aexqMD7yI5Zi4sE92a8zH7qKRFYfDoYXiFDoUu8cG4BMYyQ89DscItCT4ia3xi8lLE+075uBFcBXAg5Xvg9nd7DKX0Jjd28vMH2SVLTXfcbxnwqHXIm3MICifxlo9fQy8v5sRYzhDQ/cAjnazMTf6Rgog1qqiAgpqvyGnbBrMhFlnF45+Zd2DSAFEDHPpNApqJgFi/dH5SQLmv3bo3dy02wBi5JVPIcOyiMQUn0Qzgm8nB1vu6ogmtwAkNFRYh5GaqUKIS+nMwVMj1IU6bM690uPSEeIT/Xj+WkGaeS0CYRbYmK2HulAL7SI24o8qYkiHspYRpGWv68nLP6zYXqp8nIjhLGPSX9R3DsH/Jx0zn3uif6NiU9+BqF+WUW3/iH1PoS6cdC+EKCbFpr4E0c8oJQDW10VmB2fi1BRepkEw3j5mkf7LjwCz1mp15U5G8ONt3nJm1DH4WmYJkQA/kUFpcj77HQr/A3AIxMbxXi7mAAAAAElFTkSuQmCC"
              }
            ]
          },
          {
            title: "Page 2",
            type: "discussion",
            content: "<p>This is an area to discuss things</p>\n"
          }
        ]
      },
      {
        title: "Module 2",
        pages: [
          {
            title: "Page 3",
            type: "webcontent",
            content: "<p>Another page in another module</p>\n"
          }
        ]
      }
    ]
  };

  if (courseStructure) {
    const zipBlob = await generateImscc(courseStructure);
    const url = URL.createObjectURL(zipBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'course.imscc';
    a.click();
  }
});

```
