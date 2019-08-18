# Gumshoe System Reference Document (SRD)

This repo has a markdown version of the [Gumshoe SRD](https://site.pelgranepress.com/index.php/the-gumshoe-system-reference-document/).

You will find it in the [`srd` folder](/srd).

## Development Information

This area is for processing the Word doc SRD.

- `yarn pandoc` will create a master Markdown file.
- `yarn split` will create the split SRD files.

### Requirements

- [Pandoc](https://pandoc.org/installing.html) installed on your system.
- Node v10+
- npm or yarn
- A .docx (Word) version of the SRD.
