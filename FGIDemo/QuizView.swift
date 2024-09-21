//
//  QuizView.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI

struct QuizView: View {
    
    @State private var questions = Lesson2Questions.Lesson2.shuffled()
    @State private var currentQuestionIndex = 0
    @State private var correctAnswer = Int.random(in: 0...3)
    @State private var showScore = false
    @State private var alertTitle = ""
    @State private var userScore = 0
    @State private var timeRemaining = 10 
    @State private var timerRunning = true
    
    let timer = Timer.publish(every: 1, on: .main, in: .common).autoconnect()
    
    var body: some View {
        ZStack {
            RadialGradient(stops: [
                .init(color: .cyan, location: 0.3),
                .init(color: .green, location: 0.7),
            ],
                           center: .center,
                           startRadius: 100,
                           endRadius: 700)
            .ignoresSafeArea()
            
            VStack {
                Text("Lesson 2: Stocks Quiz")
                    .font(.largeTitle.weight(.bold))
                    .foregroundStyle(.white)
                
                Spacer()
                
                VStack(spacing: 15) {
                    Text("Question:")
                        .foregroundStyle(.secondary)
                        .font(.subheadline.weight(.heavy))
                    
                    Text(questions[currentQuestionIndex].questionText)
                        .font(.title2.weight(.semibold))
                        .multilineTextAlignment(.center)
                        .padding()
                    
                    // buttons
                    ForEach(0..<4) { num in
                        Button {
                            tappedAnswer(num)
                        } label: {
                            AnswerButton(text: questions[currentQuestionIndex].options[num])
                        }
                    }
                }
                .frame(maxWidth: .infinity)
                .padding(.vertical, 20)
                .background(.regularMaterial)
                .clipShape(RoundedRectangle(cornerRadius: 20))
                .padding(.horizontal, 20)
                
                Spacer()
                
                // Timer UI
                Text("Time: \(timeRemaining)s")
                    .foregroundColor(.white)
                    .font(.title2.bold())
                    .onReceive(timer) { _ in
                        if timerRunning && timeRemaining > 0 {
                            timeRemaining -= 1
                        } else if timeRemaining == 0 {
                            showTimeoutAlert()
                        }
                    }
                
                Spacer()
                
                // Score display
                Text("Score: \(userScore)")
                    .foregroundStyle(.white)
                    .font(.title.bold())
            }
            .padding()
            .alert(alertTitle, isPresented: $showScore) {
                Button("Next", action: nextQuestion)
            } message: {
                Text("The correct answer was: \(questions[currentQuestionIndex].options[correctAnswer])")
            }
        }
    }

    // HandleTapGestures
    func tappedAnswer(_ num: Int) {
        if num == correctAnswer {
            alertTitle = "Correct!"
            userScore += 1
        } else {
            alertTitle = "Wrong! The correct answer was \(questions[currentQuestionIndex].options[correctAnswer])"
            userScore = max(0, userScore - 1)
        }
        showScore = true
        timerRunning = false
    }
    
    // GameOver/Timeout Alert
    func showTimeoutAlert() {
        alertTitle = "Time's up! The correct answer was \(questions[currentQuestionIndex].options[correctAnswer])"
        showScore = true
        timerRunning = false
    }

    // Move To Next Question
    func nextQuestion() {
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.count
        correctAnswer = Int.random(in: 0...3)
        timeRemaining = 10
        timerRunning = true
    }
}

#Preview {
    QuizView()
}
