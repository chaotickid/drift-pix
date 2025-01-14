'use client'

import {useState} from 'react'
import {ExternalLink, Info} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Checkbox} from "@/components/ui/checkbox"
import {RiDeleteBin5Line} from "react-icons/ri";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Badge} from "@/components/ui/badge";

export default function CreateBucket() {
    const [bucketName, setBucketName] = useState('piyush')
    const [aclsEnabled, setAclsEnabled] = useState(false)
    const [blockAllPublicAccess, setBlockAllPublicAccess] = useState(true)
    const [blockNewAcls, setBlockNewAcls] = useState(true)
    const [blockExistingAcls, setBlockExistingAcls] = useState(true)
    const [allowedFileTypes, setAllowedFileTypes] = useState("")
    const [allowedFileTypeArray, setAllowedFileTypeArray] = useState([])

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-8">
            {/* General Configuration */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold">General configuration</h2>

                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="bucket-name"><b>Bucket Name*</b></Label>
                        <Input
                            id="bucket-name"
                            value={bucketName}
                            onChange={(e) => setBucketName(e.target.value)}
                        />

                        <div className={"mt-2"}>
                            <Label htmlFor="bucket-name"><b>Maximum File Size (kb)*</b></Label>
                            <Input
                                id="bucket-name"
                                type={"number"}
                                value={bucketName}
                                onChange={(e) => setBucketName(e.target.value)}
                                className={"mt-2"}
                            />
                        </div>

                        {/*show this when validation fails*/}
                        {/*<Alert variant="success" className="bg-red-50 text-red-600 border-red-200">*/}
                        {/*    <AlertDescription className="flex items-center gap-2">*/}
                        {/*        Bucket with the same name already exists*/}
                        {/*    </AlertDescription>*/}
                        {/*</Alert>*/}
                        <p className="text-sm text-muted-foreground">
                            Bucket name must be globally unique and must not contain spaces or uppercase letters.{' '}
                            <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                                See rules for bucket naming
                                <ExternalLink className="h-3 w-3 ml-1"/>
                            </a>
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label><b>AWS Region</b></Label>
                        <Select defaultValue="ap-south-1">
                            <SelectTrigger>
                                <SelectValue placeholder="Select a region"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ap-south-1">Asia Pacific (Mumbai) ap-south-1</SelectItem>
                                <SelectItem value="us-east-1">US East (N. Virginia) us-east-1</SelectItem>
                                <SelectItem value="eu-west-1">Europe (Ireland) eu-west-1</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            Copy settings from existing bucket
                            <span className="text-muted-foreground italic">- optional</span>
                        </Label>
                        <Button variant="secondary">Choose bucket</Button>
                        <p className="text-sm text-muted-foreground">
                            Only the bucket settings in the following configuration are copied.
                        </p>
                    </div>

                    <div className={"mt-2"}>
                        <Label htmlFor="bucket-name"><b>Client Secret Key</b></Label>
                        <Input
                            id="bucket-name"
                            type={"text"}
                            value={bucketName}
                            onChange={(e) => setBucketName(e.target.value)}
                            className={"mt-2"}
                        />
                    </div>
                    <div className={"mt-2"}>
                        <Label htmlFor="bucket-name"><b>Secret Key</b></Label>
                        <Input
                            id="bucket-name"
                            type={"text"}
                            value={bucketName}
                            onChange={(e) => setBucketName(e.target.value)}
                            className={"mt-2"}
                        />
                    </div>
                </div>
            </div>

            {/* Object Ownership */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold">Object Ownership</h2>
                    <Info className="h-4 w-4 text-muted-foreground"/>
                </div>

                <p className="text-sm text-muted-foreground">
                    Control ownership of objects written to this bucket from other AWS accounts and the use of access
                    control lists (ACLs). Object ownership determines who can specify access to objects.
                </p>

                <RadioGroup defaultValue="disabled" onValueChange={(value) => setAclsEnabled(value === 'enabled')}>
                    <div className="flex gap-4">
                        <div
                            className={`flex-1 p-4 rounded-lg border-2 ${!aclsEnabled ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex items-start space-x-3">
                                <RadioGroupItem value="disabled" id="acls-disabled"/>
                                <div className="space-y-1">
                                    <Label htmlFor="acls-disabled" className="font-medium">ACLs disabled
                                        (recommended)</Label>
                                    <p className="text-sm text-muted-foreground">
                                        All objects in this bucket are owned by this account. Access to this bucket and
                                        its objects is specified using only policies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`flex-1 p-4 rounded-lg border-2 ${aclsEnabled ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                            <div className="flex items-start space-x-3">
                                <RadioGroupItem value="enabled" id="acls-enabled"/>
                                <div className="space-y-1">
                                    <Label htmlFor="acls-enabled" className="font-medium">ACLs enabled</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Objects in this bucket can be owned by other AWS accounts. Access to this bucket
                                        and its objects can be specified using ACLs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </RadioGroup>

                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium">Object Ownership</p>
                    <p className="text-sm text-muted-foreground">Bucket owner enforced</p>
                </div>
            </div>

            {/* Allowed file types */}
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold">Block Public Access settings for this bucket</h2>
                    <Info className="h-4 w-4 text-muted-foreground"/>
                </div>

                <p className="text-sm text-muted-foreground">
                    Public access is granted to buckets and objects through access control lists (ACLs), bucket
                    policies, access point policies, or all. In order to ensure that public access to this bucket and
                    its objects is blocked, turn on Block all public access. These settings apply only to this bucket
                    and its access points.{' '}
                    <a href="#" className="text-blue-600 hover:underline inline-flex items-center">
                        Learn more
                        <ExternalLink className="h-3 w-3 ml-1"/>
                    </a>
                </p>

                <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                        <Checkbox
                            id="block-all"
                            checked={blockAllPublicAccess}
                            onCheckedChange={(checked) => {
                                setBlockAllPublicAccess(!!checked)
                                setBlockNewAcls(!!checked)
                                setBlockExistingAcls(!!checked)
                            }}
                        />
                        <div className="space-y-1">
                            <Label htmlFor="block-all" className="font-medium">Block all public access</Label>
                            <p className="text-sm text-muted-foreground">
                                Turning this setting on is the same as turning on all four settings below. Each of the
                                following settings are independent of one another.
                            </p>
                        </div>
                    </div>

                    <div className="ml-8 space-y-4">
                        <div className="flex items-start space-x-3">
                            <Checkbox
                                id="block-new-acls"
                                checked={blockNewAcls}
                                onCheckedChange={(checked) => setBlockNewAcls(!!checked)}
                                disabled={blockAllPublicAccess}
                            />
                            <div className="space-y-1">
                                <Label
                                    htmlFor="block-new-acls"
                                    className={`font-medium ${blockAllPublicAccess ? 'text-muted-foreground' : ''}`}
                                >
                                    Block public access to buckets and objects granted through new access control lists
                                    (ACLs)
                                </Label>
                                <p className={`text-sm ${blockAllPublicAccess ? 'text-muted-foreground/70' : 'text-muted-foreground'}`}>
                                    S3 will block public access permissions applied to newly added buckets or objects,
                                    and prevent the creation of new public access ACLs for existing buckets and objects.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-3">
                            <Checkbox
                                id="block-existing-acls"
                                checked={blockExistingAcls}
                                onCheckedChange={(checked) => setBlockExistingAcls(!!checked)}
                                disabled={blockAllPublicAccess}
                            />
                            <div className="space-y-1">
                                <Label
                                    htmlFor="block-existing-acls"
                                    className={`font-medium ${blockAllPublicAccess ? 'text-muted-foreground' : ''}`}
                                >
                                    Block public access to buckets and objects granted through any access control lists
                                    (ACLs)
                                </Label>
                                <p className={`text-sm ${blockAllPublicAccess ? 'text-muted-foreground/70' : 'text-muted-foreground'}`}>
                                    S3 will ignore all ACLs that grant public access to buckets and objects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold">Allowed File Types</h2>
                    <Info className="h-4 w-4 text-muted-foreground"/>
                </div>

                <p className="text-sm text-muted-foreground">
                    Control ownership of objects written to this bucket from other AWS accounts and the use of access
                    control lists (ACLs). Object ownership determines who can specify access to objects.
                </p>


                <div className={"mt-2"}>
                    <Label htmlFor="bucket-name">File Type*</Label>
                    <div className={"mt-5 flex items-center gap-2"}>
                        <Input
                            id="bucket-name"
                            value={allowedFileTypes}
                            onChange={(e) => {
                                setAllowedFileTypes(e.target.value)
                                // allowedFileTypeArray.push(e.target.value)
                            }}
                        />
                        <div onClick={(e) => {
                            allowedFileTypeArray.push(allowedFileTypes)
                            setAllowedFileTypes("")
                        }}><Button>Add</Button></div>

                    </div>
                </div>
                {/*showcase if file extensions added in the array*/}
                {allowedFileTypeArray.length > 0
                    ? <div className={"flex items-center gap-2"}>
                        {allowedFileTypeArray.map((fileType, index) => (
                            <div key={index} className={"flex items-center gap-2"}>
                                <Badge variant="outline"><h1 className={"text-l"}>{fileType}</h1>
                                    <div className={"cursor-pointer text-l"} onClick={(e) => {
                                        setAllowedFileTypeArray(allowedFileTypeArray.filter(item => item !== fileType))
                                    }}>
                                        <RiDeleteBin5Line/>
                                    </div>
                                </Badge>

                            </div>
                        ))}
                    </div> : null
                }
            </div>
            <Button>Create Bucket</Button>
        </div>
    )
}

