//
//  TagColorfier.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Ink

public struct TagColorfier: ItemColorfier {
    public let defaultClass: String

    public let numberOfVariants: Int

    public let variantPrefix: String

    public let items: Array<Tag>

    public typealias Item = Tag

    private static var shared: TagColorfier = TagColorfier()

    private init() {
        self.numberOfVariants = 1
        self.variantPrefix = ""
        self.items = Array<Tag>()
        self.defaultClass = ""
    }

    private init<T: Website>(defaultClass: String, variantPrefix: String, numberOfVariants: Int, in context: PublishingContext<T>) {
        self.numberOfVariants = numberOfVariants
        self.variantPrefix = variantPrefix
        self.items = Array<Tag>(context.allTags).sorted(by: { (tag1, tag2) -> Bool in
            tag1.string.lowercased() < tag2.string.lowercased()
        })
        self.defaultClass = defaultClass
    }

    internal static func setup<T: Website>(defaultClass: String, variantPrefix: String, numberOfVariants: Int, in context: PublishingContext<T>) {
        self.shared = TagColorfier(defaultClass: defaultClass, variantPrefix: variantPrefix, numberOfVariants: numberOfVariants, in: context)
    }

    internal static func colorfiedClass(for tag: Tag) -> String {
        if let index = shared.items.firstIndex(of: tag) {
            let residue = shared.items.count % shared.numberOfVariants
            let itemPerColor = shared.items.count / shared.numberOfVariants
            var result : Int
            if index / (itemPerColor + 1) < residue {
                result = index / (itemPerColor + 1)
            } else {
                result = (index - residue) / itemPerColor
            }
            return "\(shared.defaultClass) \(shared.variantPrefix)-\(result)"
        } else {
            return shared.defaultClass
        }
    }

}
