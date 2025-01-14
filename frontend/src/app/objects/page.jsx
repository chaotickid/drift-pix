'use client'

import {useState} from 'react'
import {
    ArrowUpDown,
    ChevronDown,
    Copy,
    Download,
    ExternalLink,
    FileImage,
    FileJson,
    FileText,
    Folder,
    FolderPlus,
    Info,
    RotateCcw,
    Trash2,
    Upload
} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Checkbox} from "@/components/ui/checkbox"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import Link from "next/link";


export default function S3Objects() {
    const [objects] = useState([
        {
            name: "asset-manifest.json",
            type: "json",
            lastModified: "February 25, 2021, 10:52:44 (UTC-05:00)",
            size: "1.1 KB",
            storageClass: "Standard",
            icon: <FileJson className="h-4 w-4"/>
        },
        {
            name: "favicon.ico",
            type: "ico",
            lastModified: "February 25, 2021, 10:52:45 (UTC-05:00)",
            size: "3.8 KB",
            storageClass: "Standard",
            icon: <FileImage className="h-4 w-4"/>
        },
        {
            name: "index.html",
            type: "html",
            lastModified: "February 25, 2021, 10:52:45 (UTC-05:00)",
            size: "3.0 KB",
            storageClass: "Standard",
            icon: <FileText className="h-4 w-4"/>
        },
        {
            name: "static/",
            type: "Folder",
            lastModified: "-",
            size: "-",
            storageClass: "Standard",
            icon: <Folder className="h-4 w-4"/>
        }
    ])


    return (
        <div className="p-6">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-lg font-semibold">Objects (8)</h2>
                        <Info className="h-4 w-4 text-muted-foreground"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4 mr-2"/>
                            Refresh
                        </Button>
                        <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2"/>
                            Copy S3 URI
                        </Button>
                        <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2"/>
                            Copy URL
                        </Button>
                        <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2"/>
                            Download
                        </Button>
                        <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2"/>
                            Open
                        </Button>
                        <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4 mr-2"/>
                            Delete
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    Actions
                                    <ChevronDown className="h-4 w-4 ml-2"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Move</DropdownMenuItem>
                                <DropdownMenuItem>Copy</DropdownMenuItem>
                                <DropdownMenuItem>Rename</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button variant="outline" size="sm">
                            <FolderPlus className="h-4 w-4 mr-2"/>
                            Create folder
                        </Button>
                        <Link href={"/upload"}>
                            <Button size="sm"
                            >
                                <Upload className="h-4 w-4 mr-2"/>
                                Upload
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <Input
                            placeholder="Find objects by prefix"
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
                                        Type
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div className="flex items-center gap-2">
                                        Last modified
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div className="flex items-center gap-2">
                                        Size
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div className="flex items-center gap-2">
                                        Storage class
                                        <ArrowUpDown className="h-4 w-4"/>
                                    </div>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {objects.map((object) => (
                                <TableRow key={object.name}>
                                    <TableCell>
                                        <Checkbox/>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {object.icon}
                                            <span className="text-blue-600">{object.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{object.type}</TableCell>
                                    <TableCell>{object.lastModified}</TableCell>
                                    <TableCell>{object.size}</TableCell>
                                    <TableCell>{object.storageClass}</TableCell>
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

