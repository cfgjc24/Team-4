//
//  ContentView.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/20/24.
//

import SwiftUI

struct FGITabView: View {
    var body: some View {
        TabView {
            CourseListView()
                .tabItem {
                    Image(systemName: "house.fill")
                    Text("Lessons")
                }
            QuizView()
                .tabItem {
                    Image(systemName: "bubble.left.fill")
                    Text("Quiz")
                }
        }
    }
}

#Preview {
    FGITabView()
}
