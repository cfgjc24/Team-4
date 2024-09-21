//
//  MainCalcView.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI

struct FinancialCalculatorsView: View {
    
    let columns = [
        GridItem(.flexible(), spacing: 20),
        GridItem(.flexible(), spacing: 20)
    ]
    
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
            
            NavigationStack {
                ScrollView {
                    LazyVGrid(columns: columns, spacing: 20) {
                        
                        NavigationLink(destination: SalesTaxCalc()) {
                            CalculatorButtonView(imageName: "cart", title: "Sales Tax Calculator", backgroundColor: .cyan)
                        }
                        
                        NavigationLink(destination: CompoundCalc()) {
                            CalculatorButtonView(imageName: "percent", title: "Compound Interest Calculator", backgroundColor: .green)
                        }
                        
                        NavigationLink(destination: StockPriceCalcView()) {
                            CalculatorButtonView(imageName: "chart.bar", title: "Stock Price Calculator", backgroundColor: .cyan)
                        }
                    }
                    .padding()
                }
                .navigationTitle("📊 Financial Calculators")
                .navigationBarTitleDisplayMode(.inline)
            }
        }
    }
}

#Preview {
    FinancialCalculatorsView()
}
