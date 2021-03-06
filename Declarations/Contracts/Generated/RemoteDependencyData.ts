// THIS TYPE WAS AUTOGENERATED
/// <reference path="Domain.ts" />
module AI
{
"use strict";
    export class RemoteDependencyData extends AI.Domain
    {
        public ver: number;
        public name: string;
        public id: string;
        public resultCode: string;
        public duration: string;
        public success: boolean;
        public data: string;
        public target: string;
        public type: string;
        public properties: any;
        public measurements: any;
        
        constructor()
        {
            
            super();
            this.ver = 2;
            this.success = true;
            this.properties = {};
            this.measurements = {};
        }
    }
}
