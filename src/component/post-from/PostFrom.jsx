import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            yourSkill: post?.yourSkill || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const [submitting, setSubmitting] = useState(false);

    const submit = async (data) => {
        if (submitting) {
            // If already submitting, do nothing
            return;
        }

        setSubmitting(true);

        try {
            const file = data.image && data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file && post && post.fimg) {
                appwriteService.deleteFile(post.fimg);
            }

            const dbPost = post
                ? await appwriteService.updatePost(post.$id, {
                      ...data,
                      fimg: file ? file.$id : undefined,
                  })
                : await appwriteService.createPost({ ...data, userId: userData.$id, fimg: file ? file.$id : undefined });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "yourSkill") {
                setValue("slug", slugTransform(value.yourSkill), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="yourSkill :"
                    placeholder="yourSkill"
                    className="mb-4"
                    {...register("yourSkill", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && post.fimg && (
                    <div className="w-auto mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.fimg)}
                            alt={post.yourSkill}
                            className="rounded-lg"
                        />
                    </div>
                )}
              
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-auto dark:text-black dark:bg-white"  disabled={submitting}>
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
