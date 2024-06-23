import SVGKit
import UIKit

public struct IconPackager {
    public static func imageView(named name: String) -> SVGKFastImageView? {
        guard let bundleURL = Bundle.module.url(forResource: name, withExtension: "svg") else {
            print("Error: SVG file named \(name) not found.")
            return nil
        }
        let svgImage = SVGKImage(contentsOf: bundleURL)
        return SVGKFastImageView(svgkImage: svgImage)
    }
}
