//
//  StockPriceCalc.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI
import SwiftUI

struct StockPriceCalcView: View {
    @State private var stockPrice = ""
    @State private var numberOfShares = ""
    @State private var totalValue = ""
    
    var body: some View {
        ZStack {
            RadialGradient(colors: [Color.green.opacity(0.8),
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
                Text("Stock Price Calculator")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                    .foregroundColor(Color.white)
                    .padding(.bottom, 40)

                HStack {
                    Text("Stock Price:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("$100", text: $stockPrice)
                        .keyboardType(.decimalPad)
                        .padding()
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .padding()

                HStack {
                    Text("Number of Shares:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("10", text: $numberOfShares)
                        .keyboardType(.decimalPad)
                        .padding()
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .padding()

                HStack {
                    Text("Total Value:")
                        .foregroundColor(Color.white.opacity(0.9))
                    TextField("$1000", text: $totalValue)
                        .disabled(true)
                        .padding()
                        .background(Color.white.opacity(0.2))
                        .cornerRadius(8)
                        .foregroundColor(.white)
                }
                .padding(.bottom, 40)

                Button("Calculate") {
                    if let stockPrice = Float(stockPrice), let shares = Float(numberOfShares) {
                        totalValue = "$" + String(stockPrice * shares)
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
    StockPriceCalcView()
}
