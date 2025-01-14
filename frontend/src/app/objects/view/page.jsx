'use client'

import { Copy, ExternalLink, Download, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ObjectDetails() {
    return (
        <div className="p-6">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-xl font-semibold">AWSIAM.jpg</h1>
                        {/*<Info className="h-4 w-4 text-muted-foreground" />*/}
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                            <Copy className="h-4 w-4 mr-2" />
                            Copy S3 URI
                        </Button>
                        <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                        </Button>
                        <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Open
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    Object actions
                                    <MoreHorizontal className="h-4 w-4 ml-2" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                                <DropdownMenuItem>Rename</DropdownMenuItem>
                                <DropdownMenuItem>Move</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="properties">
                    <TabsList>
                        <TabsTrigger value="properties" className="text-orange-600 data-[state=active]:text-orange-600">Properties</TabsTrigger>
                        <TabsTrigger value="permissions">Permissions</TabsTrigger>
                        <TabsTrigger value="versions">Versions</TabsTrigger>
                    </TabsList>

                    <TabsContent value="properties" className="space-y-6">
                        {/* Object Overview */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold">Object overview</h2>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                <div>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Owner</h3>
                                            <p className="text-sm font-mono flex items-center gap-2">
                                                a2fe7d9b908e0cf6fc0b1408db8832fa736a5d23be8559996b2ff7163e42c4ed
                                                <Copy className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">AWS Region</h3>
                                            <p className="text-sm">Asia Pacific (Mumbai) ap-south-1</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Last modified</h3>
                                            <p className="text-sm">May 15, 2023, 09:53:47 (UTC+05:30)</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Size</h3>
                                            <p className="text-sm">88.5 KB</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Type</h3>
                                            <p className="text-sm">jpg</p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Key</h3>
                                            <p className="text-sm font-mono flex items-center gap-2">
                                                AWSIAM.jpg
                                                <Copy className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">S3 URI</h3>
                                            <p className="text-sm font-mono flex items-center gap-2">
                                                s3://piyushgargedev-yt/AWSIAM.jpg
                                                <Copy className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Amazon Resource Name (ARN)</h3>
                                            <p className="text-sm font-mono flex items-center gap-2">
                                                arn:aws:s3:::piyushgargedev-yt/AWSIAM.jpg
                                                <Copy className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Entity tag (Etag)</h3>
                                            <p className="text-sm font-mono flex items-center gap-2">
                                                2d1b458765746894c0ef4fa0662be8
                                                <Copy className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-muted-foreground">Object URL</h3>
                                            <p className="text-sm font-mono flex items-center gap-2">
                                                <a href="#" className="text-blue-600 hover:underline break-all">
                                                    https://piyushgargedev-yt.s3.ap-south-1.amazonaws.com/AWSIAM.jpg
                                                </a>
                                                <Copy className="h-4 w-4 text-muted-foreground cursor-pointer" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="permissions">
                        {/* Permissions content would go here */}
                    </TabsContent>

                    <TabsContent value="versions">
                        {/* Versions content would go here */}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

