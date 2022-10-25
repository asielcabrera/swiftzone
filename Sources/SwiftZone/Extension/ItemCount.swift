//
//  ItemCount.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish

extension PublishingContext {
    var itemCount:Int {
        allItems(sortedBy: \.date,order: .descending).count
    }
}
