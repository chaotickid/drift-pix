'use client'

import { useState } from 'react'
import { Info, Search, ArrowUpDown, FolderPlus, Upload } from 'lucide-react'
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

export default function UploadInterface() {
    const [files, setFiles] = useState([])
    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)
        // Handle file drop logic here
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-semibold">Upload</h1>
                    <Info className="h-4 w-4 text-muted-foreground" />
                </div>

                <p className="text-sm text-muted-foreground">
                    Add the files and folders you want to upload to S3. To upload a file larger than 160GB, use the AWS CLI, AWS SDK or Amazon S3 REST API.{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                        Learn more
                    </a>
                </p>

                <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center ${
                        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <p className="text-muted-foreground">
                        Drag and drop files and folders you want to upload here, or choose Add files, or Add folders.
                    </p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Files and folders (0)</h2>
                        <div className="flex gap-2">
                            <Button variant="outline" disabled={files.length === 0}>
                                Remove
                            </Button>
                            <Button variant="outline">
                                <Upload className="h-4 w-4 mr-2" />
                                Add files
                            </Button>
                            <Button variant="outline">
                                <FolderPlus className="h-4 w-4 mr-2" />
                                Add folder
                            </Button>
                        </div>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        All files and folders in this table will be uploaded.
                    </p>

                    <div className="relative">
                        <Input
                            placeholder="Find by name"
                            className="pl-8"
                        />
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-12">
                                        <Checkbox />
                                    </TableHead>
                                    <TableHead>
                                        <div className="flex items-center gap-2">
                                            Name
                                            <ArrowUpDown className="h-4 w-4" />
                                        </div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="flex items-center gap-2">
                                            Folder
                                            <ArrowUpDown className="h-4 w-4" />
                                        </div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="flex items-center gap-2">
                                            Type
                                            <ArrowUpDown className="h-4 w-4" />
                                        </div>
                                    </TableHead>
                                    <TableHead>
                                        <div className="flex items-center gap-2">
                                            Size
                                            <ArrowUpDown className="h-4 w-4" />
                                        </div>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {files.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={5} className="h-32 text-center">
                                            <div className="text-muted-foreground">
                                                <p className="font-medium">No files or folders</p>
                                                <p className="text-sm">You have not chosen any files or folders to upload.</p>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    files.map((file) => (
                                        <TableRow key={file.name}>
                                            <TableCell>
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell>{file.name}</TableCell>
                                            <TableCell>{file.folder}</TableCell>
                                            <TableCell>{file.type}</TableCell>
                                            <TableCell>{file.size}</TableCell>
                                        </TableRow>
                                    ))
                                )}
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
        </div>
    )
}

