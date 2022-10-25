//
//  ColorfulTags.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish

public extension Tag {
    var colorfiedClass : String {
        return TagColorfier.colorfiedClass(for: self)
    }
}

public extension Plugin {

    /// Plugin to colorfy Tags.
    /// - Parameters:
    ///   - defaultClass: The default class name for Tag. Example: "tag".
    ///   - variantPrefix: The class prefix in css file. Example: "variant".
    ///   - numberOfVariants: The number of color classes in css.
    static func colorfulTags(defaultClass: String, variantPrefix: String, numberOfVariants: Int) -> Self {
        Plugin(name: "ColorfulTags") { context in
            TagColorfier.setup(defaultClass: defaultClass, variantPrefix: variantPrefix, numberOfVariants: numberOfVariants, in: context)
        }
    }
}
