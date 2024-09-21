//
//  FGILMButton.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/20/24.
//

import Foundation
import SwiftUI

struct LearnMoreButton: View {
    
    @State var backgroundColor: Color
    @State var textColor: Color
    @State var buttonText: String
    
    var framework: CourseFramework
    @Environment(\.openURL) var openURL
    
    var body: some View {
        VStack(spacing: 15) {
            Button(action: {
                openURL(URL(string: framework.urlString)!)
            }, label: {
                Text(buttonText)
                    .frame(width: 250, height: 50)
                    .background(backgroundColor.gradient)
                    .font(.title2)
                    .fontWeight(.bold)
                    .clipShape(.capsule)
            })
            .foregroundColor(textColor)
        }
    }
}

#Preview {
    LearnMoreButton(backgroundColor: .blue, textColor: .white, buttonText: "Full Lesson", framework: CourseMaterials.sampleCourse)
}
