import SVGKit
import UIKit

public struct IconPackager {
    public static func imageView(name name: String) -> SVGFastImageView? {
        guard let svgImage = SVGKImage(named: name) else { return nil }
        return SVGKFastImageView(svgkImage: svgImage)
    }
}
