//
//  Lesson2QuestionBank.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import Foundation

struct Question {
    var questionText: String
    var options: [String] // Multiple Choice of 4 Options
    var correctAnswer: Int // Index of the correct option
}

struct Lesson2Questions {
    static let Lesson2: [Question] = [
        Question(questionText: "Stocks help people:",
                 options: ["Invest and grow their money", 
                           "Lose money",
                           "Get loans",
                           "Pay taxes"],
                 correctAnswer: 0),
        
        Question(questionText: "When a company grows:",
                 options: ["Shareholders can make money", 
                           "Only the CEO benefits",
                           "Nothing happens",
                           "Employees lose jobs"],
                 correctAnswer: 0),
        
        Question(questionText: "Stocks are a way to:",
                 options: ["Fund companies", 
                           "Borrow money",
                           "Pay employees",
                           "Buy part of a company"],
                 correctAnswer: 3),
        
        Question(questionText: "Shareholders are:",
                 options: ["People who own shares in a company", 
                           "Company employees",
                           "Customers",
                           "Suppliers"],
                 correctAnswer: 0)
    ]
}
