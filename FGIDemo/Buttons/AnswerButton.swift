//
//  AnswerButton.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI

struct AnswerButton: View {
    var text: String
    
    var body: some View {
        Text(text)
            .font(.headline)
            .foregroundColor(.white)
            .padding()
            .frame(width: 225)
            .background(Color.cyan.gradient)
            .clipShape(.capsule)
            .shadow(radius: 5)
    }
}
