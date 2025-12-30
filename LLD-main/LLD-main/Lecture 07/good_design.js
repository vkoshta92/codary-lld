// ==========================
// S — Single Responsibility
// Abstract base class
// ==========================
class DocumentElement {
  // Har element ko render karna hi padega
  render() {
    throw new Error("render() must be implemented");
  }
}

// ==========================
// Text element (SRP)
// ==========================
class TextElement extends DocumentElement {
  constructor(text) {
    super(); // Parent constructor call
    this.text = text; // Sirf text store
  }

  render() {
    return this.text; // Sirf text return
  }
}

// ==========================
// Image element (SRP)
// ==========================
class ImageElement extends DocumentElement {
  constructor(imagePath) {
    super();
    this.imagePath = imagePath; // Image ka path
  }

  render() {
    // Image ka representation
    return `[Image: ${this.imagePath}]`;
  }
}

// ==========================
// New line element
// ==========================
class NewLineElement extends DocumentElement {
  render() {
    return "\n"; // New line
  }
}

// ==========================
// Tab space element
// ==========================
class TabSpaceElement extends DocumentElement {
  render() {
    return "\t"; // Tab space
  }
}

// ==========================
// Document (Composite Pattern)
// ==========================
class Document {
  constructor() {
    this.documentElements = []; // Sirf elements store karega
  }

  addElement(element) {
    // Polymorphism: koi bhi DocumentElement aa sakta hai
    this.documentElements.push(element);
  }

  render() {
    let result = "";

    // Har element apna render khud karega
    for (const element of this.documentElements) {
      result += element.render();
    }

    return result; // Final document
  }
}

// ==========================
// Persistence abstraction (DIP)
// ==========================
class Persistence {
  save(data) {
    throw new Error("save() must be implemented");
  }
}

// ==========================
// File storage implementation
// ==========================
class FileStorage extends Persistence {
  save(data) {
    // Browser demo (Node.js me fs hota)
    console.log("Saving to file...");
    console.log(data);
  }
}

// ==========================
// DB storage (future extension)
// ==========================
class DBStorage extends Persistence {
  save(data) {
    console.log("Saving to database...");
  }
}

// ==========================
// DocumentEditor (Facade)
// ==========================
class DocumentEditor {
  constructor(document, storage) {
    this.document = document; // Document injected
    this.storage = storage;   // Storage injected (DIP)
    this.renderedDocument = ""; // Cache
  }

  addText(text) {
    // Client ko element banana nahi aata
    this.document.addElement(new TextElement(text));
  }

  addImage(path) {
    this.document.addElement(new ImageElement(path));
  }

  addNewLine() {
    this.document.addElement(new NewLineElement());
  }

  addTabSpace() {
    this.document.addElement(new TabSpaceElement());
  }

  renderDocument() {
    // Optimization: ek hi baar render
    if (!this.renderedDocument) {
      this.renderedDocument = this.document.render();
    }
    return this.renderedDocument;
  }

  saveDocument() {
    // Editor ko nahi pata kaha save ho raha
    this.storage.save(this.renderDocument());
  }
}

// ==========================
// Client code (Clean API)
// ==========================
const doc = new Document();
const storage = new FileStorage(); // Easily replaceable

const editor = new DocumentEditor(doc, storage);

editor.addText("Hello, world!");
editor.addNewLine();
editor.addText("SOLID principles in action");
editor.addNewLine();
editor.addTabSpace();
editor.addText("Clean architecture");
editor.addNewLine();
editor.addImage("image.png");

console.log(editor.renderDocument());
editor.saveDocument();
