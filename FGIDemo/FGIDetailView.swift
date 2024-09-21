//
//  FGICourseCellView.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

extension Color {
    init(hex: Int, opacity: Double = 1.0) {
        let red = Double((hex & 0xff0000) >> 16) / 255.0
        let green = Double((hex & 0x00ff00) >> 8) / 255.0
        let blue = Double((hex & 0xff) >> 0) / 255.0
        self.init(.sRGB, red: red, green: green, blue: blue, opacity: opacity)
    }
}

import SwiftUI

struct FGIDetailView: View {
    
    var course: CourseFramework
    
    var body: some View {
        ZStack {

            RadialGradient(colors: [Color.green,
                                    Color.cyan],
                           center: .top,
                           startRadius: 100,
                           endRadius: 750)
            .ignoresSafeArea()
            
            VStack {
                Spacer()
                
                HStack {
                    Image(systemName: course.lessonSymbol)
                        .resizable()
                        .frame(width: 50, height: 50)
                    Text(course.name)
                        .font(.largeTitle)
                        .fontWeight(.bold)
                        .scaledToFit()
                        .minimumScaleFactor(0.6)
                        .padding()
                }
                Text(course.topic)
                    .font(.title2)
                    .fontWeight(.semibold)
                
                Spacer()
                
                VStack {
                    Text(course.significance)
                        .font(.system(size: 22))
                        .padding(.init(top: 2,
                                       leading: 20,
                                       bottom: 0,
                                       trailing: 20))
                        .frame(maxWidth: 400)
                }
                
                Spacer()
                
                LearnMoreButton(backgroundColor: Color(hex: 0xd4e7f5),
                                textColor: Color(.black),
                                buttonText: "Learn More",
                                framework: CourseMaterials.sampleCourse)
            }
            .foregroundStyle(Color(.white))
        }
    }
}

#Preview {
    FGIDetailView(course: CourseMaterials.sampleCourse)
}
