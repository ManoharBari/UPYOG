"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Save, RefreshCw } from "lucide-react"
import { refundPolicy } from "@/lib/data"

export default function RefundPolicyConfigurator() {
  const [policy, setPolicy] = useState({
    fullRefund: refundPolicy.fullRefund,
    partialRefund: refundPolicy.partialRefund,
    partialRefundPercentage: refundPolicy.partialRefundPercentage,
    noRefund: refundPolicy.noRefund,
    enableAutomaticRefunds: true,
  })

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    // In a real app, this would save the policy to the database
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const handleReset = () => {
    setPolicy({
      fullRefund: refundPolicy.fullRefund,
      partialRefund: refundPolicy.partialRefund,
      partialRefundPercentage: refundPolicy.partialRefundPercentage,
      noRefund: refundPolicy.noRefund,
      enableAutomaticRefunds: true,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Refund Policy Configurator</h1>
        <p className="text-muted-foreground">Configure the cancellation and refund policy for bookings</p>
      </div>

      {saved && (
        <Alert className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Refund policy has been updated successfully.</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Cancellation Policy</CardTitle>
          <CardDescription>Define the time thresholds and refund percentages for cancellations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>Full Refund Threshold (hours before booking)</Label>
                <span className="font-medium">{policy.fullRefund} hours</span>
              </div>
              <Slider
                value={[policy.fullRefund]}
                min={6}
                max={72}
                step={1}
                onValueChange={(value) => setPolicy((prev) => ({ ...prev, fullRefund: value[0] }))}
              />
              <p className="text-sm text-muted-foreground">
                Customers will receive a 100% refund if they cancel at least {policy.fullRefund} hours before their
                booking.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>Partial Refund Threshold (hours before booking)</Label>
                <span className="font-medium">{policy.partialRefund} hours</span>
              </div>
              <Slider
                value={[policy.partialRefund]}
                min={3}
                max={policy.fullRefund}
                step={1}
                onValueChange={(value) => setPolicy((prev) => ({ ...prev, partialRefund: value[0] }))}
              />
              <p className="text-sm text-muted-foreground">
                Customers will receive a partial refund if they cancel between {policy.partialRefund} and{" "}
                {policy.fullRefund} hours before their booking.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>Partial Refund Percentage</Label>
                <span className="font-medium">{policy.partialRefundPercentage}%</span>
              </div>
              <Slider
                value={[policy.partialRefundPercentage]}
                min={0}
                max={100}
                step={5}
                onValueChange={(value) => setPolicy((prev) => ({ ...prev, partialRefundPercentage: value[0] }))}
              />
              <p className="text-sm text-muted-foreground">
                Customers will receive {policy.partialRefundPercentage}% of their payment as a refund during the partial
                refund period.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label>No Refund Threshold (hours before booking)</Label>
                <span className="font-medium">{policy.noRefund} hours</span>
              </div>
              <Slider
                value={[policy.noRefund]}
                min={0}
                max={policy.partialRefund}
                step={1}
                onValueChange={(value) => setPolicy((prev) => ({ ...prev, noRefund: value[0] }))}
              />
              <p className="text-sm text-muted-foreground">
                Customers will receive no refund if they cancel less than {policy.noRefund} hours before their booking.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="automatic-refunds"
              checked={policy.enableAutomaticRefunds}
              onCheckedChange={(checked) => setPolicy((prev) => ({ ...prev, enableAutomaticRefunds: checked }))}
            />
            <Label htmlFor="automatic-refunds">Enable automatic refund processing</Label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="gap-2" onClick={handleReset}>
            <RefreshCw className="h-4 w-4" />
            Reset to Default
          </Button>
          <Button className="gap-2" onClick={handleSave}>
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Refund Policy Preview</CardTitle>
          <CardDescription>How the policy will appear to users</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <h3>Cancellation and Refund Policy</h3>
            <p>We understand that plans can change. Our refund policy is designed to be fair and transparent.</p>
            <ul>
              <li>
                <strong>Full Refund ({policy.fullRefund}+ hours before booking):</strong> If you cancel at least{" "}
                {policy.fullRefund} hours before your booking, you will receive a 100% refund.
              </li>
              <li>
                <strong>
                  Partial Refund ({policy.partialRefund}-{policy.fullRefund} hours before booking):
                </strong>{" "}
                If you cancel between {policy.partialRefund} and {policy.fullRefund} hours before your booking, you will
                receive a {policy.partialRefundPercentage}% refund.
              </li>
              <li>
                <strong>No Refund (less than {policy.noRefund} hours before booking):</strong> If you cancel less than{" "}
                {policy.noRefund} hours before your booking, no refund will be provided.
              </li>
            </ul>
            <p>All refunds will be processed back to the original payment method within 5-7 business days.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
