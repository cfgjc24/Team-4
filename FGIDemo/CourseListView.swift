import SwiftUI

struct CourseListView: View {
    
    var frameworks = CourseMaterials.courses
    
    var body: some View {
        ZStack {
            RadialGradient(colors: [Color(hex: 0x67B0E8).opacity(0.8),
                                    Color(hex: 0x005A9C)],
                           center: .topLeading,
                           startRadius: 150,
                           endRadius: 800)
            .ignoresSafeArea()
            .blur(radius: 10)
            .overlay(LinearGradient(colors: [Color.white.opacity(0.1), Color.black.opacity(0.3)],
                                    startPoint: .topLeading,
                                    endPoint: .bottomTrailing)
                        .ignoresSafeArea())
            
            NavigationStack {
                List {
                    ForEach(frameworks) { framework in
                        NavigationLink(destination: FGIDetailView(course: framework)) {
                            FrameworkIconAndNameView(framework: framework)
                        }
                        .listRowBackground(BlurView(style: .systemUltraThinMaterial)) 
                        .cornerRadius(12)
                        .shadow(color: .black.opacity(0.2), 
                                radius: 10,
                                x: 0,
                                y: 5) // Drop shadow 
                        .padding(.horizontal)
                    }
                }
                .scrollContentBackground(.hidden)
                .navigationTitle("📊 FGI Lesson Plans")
                .listStyle(.insetGrouped)
            }
            .tint(Color.white)
        }
    }
}



#Preview {
    CourseListView()
}


