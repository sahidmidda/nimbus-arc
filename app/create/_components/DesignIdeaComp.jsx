import Lookup from '@/app/_data/Lookup';
import React, { useEffect, useState } from 'react'
import CommonComp from './CommonComp';
import axios from 'axios';
import Prompt from '@/app/_data/Prompt';
import Image from 'next/image';

function DesignIdeaComp({ onHandleInputChange, formData }) {
    const [selectedIdea, setSelectedIdea] = useState(formData?.idea);
    const [loading, setLoading] = useState(true);
    const [generatedIdeas, setGeneratedIdeas] = useState([]);
    const { title, description, palette, style, idea } = formData;

    const generateLogoDesignIdeas = async () => {
        setLoading(true);
        const PROMPT = Prompt.DESIGN_IDEA_PROMPT
            .replace("{logoType}", style?.title)
            .replace("{logoTitle}", title)
            .replace("{logoDesc}", description)
            .replace("{logoPrompt}", style?.prompt);
        // console.log(PROMPT);
        const result = await axios.post("/api/ai-design-ideas", {
            prompt: PROMPT,
        });
        console.log(result?.data);
        setGeneratedIdeas(result?.data?.ideas);
        setLoading(false);
    }

    const handleIdeaChange = (e, idea) => {
        if (idea === selectedIdea) {
            return;
        }
        setSelectedIdea(idea);
        onHandleInputChange({
            name: "idea",
            value: idea,
        });
    }

    useEffect(() => {
        generateLogoDesignIdeas();
    }, [])

    return (
        <div className='mb-10'>
            <CommonComp title={Lookup.createCompStep5Title} description={Lookup.createCompStep5Description} />
            <div className="flex justify-center items-center mt-10">
                {
                    loading && (
                        <div className="">
                            <Image
                                src="/assets/loader.gif"
                                alt="Loader"
                                width="48" height="48"
                            />
                        </div>
                    )
                }
                {
                    generatedIdeas?.length > 0 && (
                        <div className="flex flex-wrap gap-4">
                            {
                                generatedIdeas?.map((idea, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            onClick={(e) => handleIdeaChange(e, idea)}
                                            className={`p-2 px-6 border border-1 rounded-full text-sm text-center cursor-pointer hover:border-[#04724D] ${idea === selectedIdea ? 'border-[#04724D]' : 'border-gray-300'} `}
                                        >
                                            {idea}
                                        </div>
                                    );
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DesignIdeaComp