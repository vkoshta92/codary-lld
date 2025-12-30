

// SOLID & OOPS NOTES – Document Editor Project (Hinglish)
// Project Overview:
// Ye project ek Document Editor hai jisme hum text, image, new line, tab jaise elements add kar
// sakte hain. Har feature alag class handle karti hai jo SOLID principles follow karti hai.
// OOPS CONCEPTS
// 1. Abstraction
// DocumentElement ek abstract class hai jo sirf render() method define karti hai. User ko ye nahi
// pata render kaise ho raha, bas itna pata hai ki har element render karega.
// 2. Inheritance
// TextElement, ImageElement, NewLineElement sab DocumentElement se inherit karte hain. Isse
// code reuse hota hai aur common structure milta hai.
// 3. Polymorphism
// Document class har element par element.render() call karti hai. Element text ho, image ho ya
// newline – behavior alag hota hai but method same rehta hai.
// 4. Encapsulation
// Har class apna data aur methods ek jagah rakhti hai. TextElement apna text bahar expose nahi
// karta, sirf render ke through deta hai.
// 5. Composition
// Document ke paas multiple DocumentElement hote hain (HAS-A relation). Editor ke paas
// Document aur Storage hota hai.
// SOLID PRINCIPLES
// S – Single Responsibility Principle
// Har class ka sirf ek kaam hai. TextElement sirf text render karta hai. FileStorage sirf save karta hai.
// Isliye change ka ek hi reason hota hai.
// O – Open/Closed Principle
// System extension ke liye open hai par modification ke liye closed. Agar new element add karna ho
// to new class banao, existing code change nahi karna padta.
// L – Liskov Substitution Principle
// TextElement aur ImageElement dono DocumentElement ki jagah safely use ho sakte hain.
// Document ko farq nahi padta kaunsa element hai.
// I – Interface Segregation Principle
// DocumentElement me sirf ek hi method hai – render(). Koi extra method nahi hai jo child classes ko
// force kare.
// D – Dependency Inversion Principle
// DocumentEditor directly FileStorage pe depend nahi karta. Wo Persistence abstraction pe depend
// karta hai. Isse future me DBStorage easily add kar sakte hain.
// Conclusion:
// Ye project real-world clean architecture follow karta hai aur interview-ready example hai.