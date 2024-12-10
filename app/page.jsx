"use client";
import React, { useState, useEffect } from "react";

import { MantineProvider, Group, Input, Button, Text ,Title,Image,Grid,Card} from "@mantine/core";
import Link from 'next/link';

function PinInput() {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [message, setMessage] = useState("Didn’t receive a code? Resend Code");
  const [timer, setTimer] = useState(99); 
  const [resendAvailable, setResendAvailable] = useState(true);
 

  const handleInputChange = (value, index) => {
    const newPin = [...pin];
    if (/^\d?$/.test(value)) {
      // Allow only digits
      newPin[index] = value;
      setPin(newPin);

    
      if (value && index < 5) {
        const nextInput = document.getElementById(`pin-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }

   
    if (newPin.join("").length === 6) {
      setResendAvailable(false); 
      setMessage("Wait 1:39 seconds before requesting a new code");
    }
  };

  const handleResend = () => {
    if (resendAvailable) {
      alert("Code resent!");
    }
  };

 
  useEffect(() => {
    if (!resendAvailable && timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timer === 0) {
      setResendAvailable(true);
      setMessage("Didn’t receive a code? Resend Code");
      setTimer(99); 
    }
  }, [resendAvailable, timer]);

  return (
    
    <div>
      <Group position="center" spacing="lg" style={{ margin: "1rem 0", display:"flex" }}>
  {pin.map((digit, index) => (
    <Input
      key={index}
      id={`pin-${index}`}
      value={digit}
      maxLength={1}
      onChange={(e) => handleInputChange(e.target.value, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      style={{
        width: "3rem", // Width of each box
        height: "3rem", // Height of each box
        textAlign: "center", 
        fontSize: "1.5rem", 
        padding: "0", 
        margin: "0 0.5rem", 
        border: "1px solid #ccc", 
        borderRadius: "4px", 
      }}
    />
  ))}
</Group>

      <Text
        size="sm"
        style={{
          color: resendAvailable ? "black" : "gray",
          cursor: resendAvailable ? "pointer" : "default",
        }}
        onClick={resendAvailable ? handleResend : null}
      >
        {message}
      </Text>
    </div>
  );
}

function Page() {
  
  return (
   

 
    <div style={{ minHeight: "100vh", display: "flex" }}>
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(to bottom right, #7B2CBF, #FF8E00)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <div>
          <Title order={1} style={{ color: "white", marginBottom: "1.5rem" }}>
            Layout Cards
          </Title>
          <Grid>
</Grid>
          <Grid gutter="md">
            
            {/* Singapore Card */}
            <Grid.Col span={12} sm={6}>
              <Card shadow="md" padding="lg" radius="md" withBorder>
              <Image
              radius="lg"
              fit="contain"
              src="/images/Group.svg"
              alt="image"
              style={{
                width: 30,
                height: 30
              }}
            />
                <Title order={3}>Singapore</Title>
                
                <Text color="dimmed">Marina Bay Sands, Merlion Park</Text>
              </Card>
            </Grid.Col>

            {/* Hong Kong Card */}
            <Grid.Col span={12} sm={6}>
              <Card shadow="md" padding="lg" radius="md" withBorder>
              <Image
              radius="lg"
              fit="contain"
              src="/images/Vector.svg"
              alt="image"
              style={{
                width: 30,
                height: 30
              }}
            />
                <Title order={3}>Hong Kong</Title>
                <Text color="dimmed">Victoria Peak, Big Buddha</Text>
              </Card>
            </Grid.Col>

            {/* USA Card */}
            <Grid.Col span={12} sm={6}>
              <Card shadow="md" padding="lg" radius="md" withBorder>
              <Image
              radius="lg"
              fit="contain"
              src="/images/us.svg"
              alt="image"
              style={{
                width: 30,
                height: 30
              }}
            />
                <Title order={3}>USA</Title>
                <Text color="dimmed">Statue of Liberty, Times Square</Text>
              </Card>
            </Grid.Col>
          </Grid>
        </div>
      </div>

      {/* Right Section: Email Verification */}
      <div
        style={{
          flex: 1,
          background: "#F8F9FA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Card
          shadow="md"
          padding="lg"
          radius="md"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <Image
            radius="xl"
            fit="contain"
            src="/image/logo.svg"
            alt="image"
            style={{
              width: 200,
              height: 40,
            }}
          />
          <Text style={{ fontSize: "32px" }}>
            Verify your Email
          </Text>
          <Text size="sm" color="dimmed" style={{ marginBottom: "1.5rem" }}>
            Please enter the 6-digit code we just sent to s*********a@xyz.com
          </Text>
          <PinInput />
          
        <Link href="/intermediate" passHref>
            <Button variant="filled" size="xl" color="red">Verify</Button>
            </Link>
            
          <Text color="dimmed" size="xs" style={{ marginTop: "1rem" }}>
            By continuing, you’re agreeing to Nobody’s{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>
              Terms of Service, Privacy Policy, and Cookie Policy.
            </span>
          </Text>
        </Card>
      </div>
    </div>

   );
}

export default Page;
