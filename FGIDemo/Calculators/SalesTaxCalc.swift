//
//  SalesTaxCalc.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI

extension Color {
    init(hex: Int, opacity: Double = 1.0) {
        let red = Double((hex & 0xff0000) >> 16) / 255.0
        let green = Double((hex & 0x00ff00) >> 8) / 255.0
        let blue = Double((hex & 0xff) >> 0) / 255.0
        self.init(.sRGB, red: red, green: green, blue: blue, opacity: opacity)
    }
}

struct SalesTaxCalc: View {
    @State var beforeTaxPrice = ""
    @State var salesTaxRate = ""
    @State var afterTaxPrice = ""
    
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
                Text("Sales Tax Calculator")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color.white)
                
                HStack {
                    Text("Before Tax Price:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("$10", text: $beforeTaxPrice)
                        .keyboardType(.decimalPad)
                        .padding(.horizontal)
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .fontWeight(.bold)
                .padding(.top, 40.0)
                
                HStack {
                    Text("Sales Tax Rate:")
                        .fontDesign(.serif)
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("4.5%", text: $salesTaxRate)
                        .keyboardType(.decimalPad)
                        .padding(.horizontal)
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .fontWeight(.bold)
                .padding(.top, 20.0)
                .shadow(color: Color.black.opacity(0.3), radius: 20)
                
                HStack {
                    Text("Price After Tax:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("$10.45", text: $afterTaxPrice)
                        .padding(.horizontal)
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .fontWeight(.bold)
                .padding(.top, 20.0)
                .padding(.bottom, 40.0)
                .disabled(true)
                
                Button("Calculate") {
                    if let beforeTax = Float(beforeTaxPrice), let tax = Float(salesTaxRate) {
                        let salesTax = beforeTax * tax / 100
                        afterTaxPrice = "$" + String(beforeTax + salesTax)
                    }
                }
                .fontWeight(.bold)
                .foregroundColor(Color(hex: 0xf0f8ff))
                .padding()
                .background(Color.green.opacity(0.7))
                .cornerRadius(8)
                .shadow(color: Color.black.opacity(0.4), radius: 10, y: 5)
                
                Spacer()
            }
            .padding(12.0)
            .padding(.leading, 12.0)
        }
    }
}

#Preview {
    SalesTaxCalc()
}

