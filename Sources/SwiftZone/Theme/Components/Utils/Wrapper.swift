//
//  Wrapper.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Plot
import Ink

extension Node where Context == HTML.BodyContext {
    static func wrapper(_ nodes: Node...) -> Node {
        .div(.class("wrapper"), .group(nodes))
    }
}
