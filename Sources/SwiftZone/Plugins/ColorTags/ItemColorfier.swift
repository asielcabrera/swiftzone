//
//  ItemColorfier.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Foundation

public protocol ItemColorfier {
    associatedtype Item

    var defaultClass: String { get }
    var numberOfVariants: Int { get }
    var variantPrefix: String { get }
    var items: Array<Item> { get }
}
