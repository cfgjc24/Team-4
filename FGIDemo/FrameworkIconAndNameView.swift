import SwiftUI

struct FrameworkIconAndNameView: View {
    
    var framework: CourseFramework
    
    var body: some View {
        HStack {
            Image(systemName: framework.lessonSymbol)
                .resizable()
                .scaledToFit()
                .frame(width: 40, height: 40) // Adjusted size for a bigger icon
                .foregroundStyle(LinearGradient(colors: [Color.green, Color.cyan], startPoint: .top, endPoint: .bottom)) // Futuristic gradient for the icon
                .padding(.trailing, 10)
            
            VStack(alignment: .leading) {
                Text(framework.name)
                    .font(.system(size: 22, weight: .bold, design: .rounded)) // Rounded bold font for modern feel
                    .foregroundColor(.white)
                
                Text(framework.topic)
                    .font(.subheadline)
                    .foregroundColor(.white.opacity(0.7)) // Subtle topic text for additional info
            }
        }
        .padding()
        .background(BlurView(style: .systemThinMaterialDark)) // Blurred background for the list item
        .cornerRadius(12)
        .overlay(
            RoundedRectangle(cornerRadius: 12)
                .stroke(LinearGradient(colors: [.blue, .green], startPoint: .topLeading, endPoint: .bottomTrailing), lineWidth: 1)
        )
    }
}
