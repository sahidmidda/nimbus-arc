'use client';

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import TitleComp from './_components/TitleComp'
import DescriptionComp from './_components/DescriptionComp';
import ColorPaletteComp from './_components/ColorPaletteComp';
import DesignStyleComp from './_components/DesignStyleComp';
import DesignIdeaComp from './_components/DesignIdeaComp';
import { useSearchParams } from 'next/navigation';

function CreateLogo() {
    const [step, setStep] = useState(1);
    const searchParams = useSearchParams();
    const logoTitle = searchParams?.get("title") || "";
    const [formData, setFormData] = useState({
        title: logoTitle,
        description: "",
        palette: null,
        style: "",
        idea: "",
    });
    const components = {
        1: TitleComp,
        2: DescriptionComp,
        3: ColorPaletteComp,
        4: DesignStyleComp,
        5: DesignIdeaComp,
    };
    // Get the component based on the current step
    const CurrentComponent = components[step];

    const onHandleInputChange = ({ name, value }) => {
        // console.log(name, value);
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData])

    return (
        <div className="my-16 p-10 border border-gray-300 rounded-xl 2xl:mx-32">
            {/* {
                step === 1 ? (
                    <TitleComp onHandleInputChange={onHandleInputChange} />
                ) : step === 2 ? (
                    <DescriptionComp onHandleInputChange={onHandleInputChange} />
                ) : step === 3 ? (
                    <ColorPaletteComp onHandleInputChange={onHandleInputChange} />
                ) : step === 4 ? (
                    <DesignStyleComp onHandleInputChange={onHandleInputChange} />
                ) : step === 5 ? (
                    <DesignIdeaComp onHandleInputChange={onHandleInputChange} />
                ) : (
                    <div className="">Not Found 404</div>
                )
            } */}
            {CurrentComponent ? <CurrentComponent onHandleInputChange={onHandleInputChange} formData={formData} /> : <div>No Component Found</div>}
            <div className="flex justify-between mt-8">
                {
                    step !== 1 && (
                        <Button
                            variant="secondary"
                            onClick={() => setStep(step - 1)}
                        >
                            <ArrowLeft /> Previous
                        </Button>
                    )
                }
                <Button
                    className="bg-darkprimary"
                    onClick={() => setStep(step + 1)}
                >
                    Continue <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default CreateLogo