//
//  CompoundCalc.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI

struct CompoundCalc: View {
    @State private var principalAmount = ""
    @State private var interestRate = ""
    @State private var years = ""
    @State private var compoundedAmount = ""
    
    var body: some View {
        ZStack {
            RadialGradient(colors: [Color.green,
                                    Color.cyan],
                           center: .top,
                           startRadius: 150,
                           endRadius: 800)
            .ignoresSafeArea()
            .blur(radius: 10)
            .overlay(LinearGradient(colors: [Color.white.opacity(0.1), Color.black.opacity(0.3)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing)
                        .ignoresSafeArea())
            
            VStack {
                Text("Compound Interest Calculator")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color.white)
                    .padding(.bottom, 40)

                HStack {
                    Text("Principal:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("$1000", text: $principalAmount)
                        .keyboardType(.decimalPad)
                        .padding()
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .padding()

                HStack {
                    Text("Interest Rate:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("5%", text: $interestRate)
                        .keyboardType(.decimalPad)
                        .padding()
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .padding()

                HStack {
                    Text("Years:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("10", text: $years)
                        .keyboardType(.decimalPad)
                        .padding()
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .padding(.bottom, 40)

                HStack {
                    Text("Compounded Amount:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("$1647.01", text: $compoundedAmount)
                        .disabled(true)
                        .padding()
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .padding()

                Button("Calculate") {
                    if let principal = Float(principalAmount), let rate = Float(interestRate), let time = Float(years) {
                        compoundedAmount = "$" + String(principal * pow(1 + rate / 100, time))
                    }
                }
                .fontWeight(.bold)
                .foregroundColor(Color.white)
                .padding()
                .background(Color.green.opacity(0.7))
                .cornerRadius(8)
                .shadow(color: Color.black.opacity(0.4), radius: 10, y: 5)
                
                Spacer()
            }
            .padding()
        }
    }
}

#Preview {
    CompoundCalc()
}
