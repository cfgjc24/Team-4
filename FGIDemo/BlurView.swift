//
//  BlurView.swift
//  FGIDemo
//
//  Created by Ibrahima Toure on 9/21/24.
//

import SwiftUI

struct BlurView: UIViewRepresentable {
    var style: UIBlurEffect.Style

    // Creates noice visual effects
    func makeUIView(context: Context) -> UIVisualEffectView {
        return UIVisualEffectView(effect: UIBlurEffect(style: style))
    }

    // Update the UIVisualEffectView
    func updateUIView(_ uiView: UIVisualEffectView, context: Context) {
    }
}
