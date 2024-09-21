//
//  CalculatorButton.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI

struct CalculatorButtonView: View {
    var imageName: String
    var title: String
    var backgroundColor: Color
    
    var body: some View {
        VStack {
            Image(systemName: imageName)
                .resizable()
                .scaledToFit()
                .frame(width: 50, height: 50)
                .foregroundColor(.white)
            
            Text(title)
                .font(.headline)
                .multilineTextAlignment(.center)
                .foregroundColor(.white)
                .padding(.top, 10)
        }
        .frame(width: 150, height: 150)
        .background(backgroundColor.opacity(0.8))
        .cornerRadius(15)
        .shadow(color: .black.opacity(0.2), radius: 10, x: 0, y: 5)
        .padding(.horizontal)
    }
}

#Preview {
    CalculatorButtonView(imageName: "percent",
                         title: "ExampleCalc",
                         backgroundColor: .red)
}
