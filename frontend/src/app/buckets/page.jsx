'use client'

import { useState } from 'react'
import { ArrowUpDown, Info, RotateCcw, Copy, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import {useDispatch, useSelector} from "react-redux";



export default function BucketInterface() {
    const [buckets] = useState([
        {
            name: "amplify-demoapp-staging-15911-deployment",
            region: "US East (N. Virginia) us-east-1",
            access: "Objects can be public",
            creationDate: "September 16, 2021, 21:39:18 (UTC-04:00)"
        },
        {
            name: "amplify-react-demo-12345-deployment",
            region: "US East (N. Virginia) us-east-1",
            access: "Objects can be public",
            creationDate: "September 15, 2021, 20:22:55 (UTC-04:00)"
        },
        // Add more bucket data as needed
    ])


    return (
        <div className="p-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold">Buckets (10)</h2>
                        <Info className="h-4 w-4 text-muted-foreground"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4 mr-2"/>
                            Refresh
                        </Button>
                        <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2"/>
                            Copy ARN
                        </Button>
                        <Button variant="outline" size="sm">
                            Empty
                        </Button>
                        <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-2"/>
                            Delete
                        </Button>
                        <Button size="sm">Create bucket</Button>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <Input
                            placeholder="Find buckets by name"
                            className="pl-8"
                        />
                        <svg
                            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <circle cx="11" cy="11" r="8"/>
                            <path d="m21 21-4.3-4.3"/>
                        </svg>
                    </div>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">
                                    <Checkbox/>
                                </TableHead>
                                <TableHead>
                                    <div className="flex items-center gap-2">
                                        Name
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div className="flex items-center gap-2">
                                        AWS Region
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div className="flex items-center gap-2">
                                        Access
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div className="flex items-center gap-2">
                                        Creation date
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {buckets.map((bucket) => (
                                <TableRow key={bucket.name}>
                                    <TableCell>
                                        <Checkbox/>
                                    </TableCell>
                                    <TableCell className="font-medium text-blue-600">
                                        {bucket.name}
                                    </TableCell>
                                    <TableCell>{bucket.region}</TableCell>
                                    <TableCell>{bucket.access}</TableCell>
                                    <TableCell>{bucket.creationDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center justify-between px-2">
                    <Button variant="ghost" size="sm" disabled>
                        Previous
                    </Button>
                    <span className="text-sm text-muted-foreground">Page 1 of 1</span>
                    <Button variant="ghost" size="sm" disabled>
                        Next
                    </Button>
                </div>
            </div>

        </div>
    )
}

