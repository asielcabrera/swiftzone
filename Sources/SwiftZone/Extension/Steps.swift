//
//  Steps.swift
//  
//
//  Created by Asiel Cabrera Gonzalez on 10/25/22.
//

import Publish
import Ink

extension PublishingStep{
    static func addModifier(modifier:Modifier, modifierName name:String = "") -> Self{
        .step(named: "addModifier \(name)"){ context in
            context.markdownParser.addModifier(modifier)
        }
    }
}
