import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Avatar,
  Button,
  Chip,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  LinearProgress,
  Alert,
  TextField,
  Switch,
  FormControlLabel,
  Breadcrumbs,
  Link,
  Stack,
} from '@mui/material';
import {
  Edit as EditIcon,
  Settings as SettingsIcon,
  Star as StarIcon,
  Pets as PetsIcon,
  Devices as DevicesIcon,
  ReceiptLong as ReceiptLongIcon,
  CreditCard as CreditCardIcon,
  ManageAccounts as ManageAccountsIcon,
  LocationOn as LocationIcon,
  CalendarMonth as CalendarIcon,
  Add as AddIcon,
  BluetoothConnected as BluetoothConnectedIcon,
  Download as DownloadIcon,
  Lock as LockIcon,
  Security as SecurityIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

// --- MOCK USER DATA ---

const MOCK_USER = {
  name: "Rahul Sharma",
  email: "rahul.sharma@email.com",
  phone: "+91 98765 43210",
  location: "Noida, Uttar Pradesh, India",
  memberSince: "January 2024",
  avatar: "RS",
  dogs: [
    {
      id: 1,
      name: "Bruno",
      breed: "Labrador Retriever",
      age: "3 years",
      weight: "28 kg",
      device: "PawTrack Pro",
      deviceSku: "PT-PRO-003",
      subscription: "Premium",
      deviceStatus: "Active",
      lastSync: "2 minutes ago",
      iconType: "large"
    },
    {
      id: 2,
      name: "Coco",
      breed: "Beagle",
      age: "1.5 years",
      weight: "9 kg",
      device: "PawTrack Mini",
      deviceSku: "PT-MINI-004",
      subscription: "Basic",
      deviceStatus: "Active",
      lastSync: "1 hour ago",
      iconType: "small"
    }
  ],
  orders: [
    {
      id: "ORD-2024-001",
      date: "12 Jan 2024",
      items: ["PawTrack Pro", "Premium Subscription"],
      total: 99,
      status: "Delivered"
    },
    {
      id: "ORD-2024-002",
      date: "3 Mar 2024",
      items: ["PawTrack Mini"],
      total: 35,
      status: "Delivered"
    },
    {
      id: "ORD-2024-003",
      date: "28 Apr 2024",
      items: ["PawTrack Plus"],
      total: 49,
      status: "Shipped"
    }
  ],
  subscription: {
    plan: "Premium",
    status: "Active",
    nextBilling: "June 9, 2024",
    amount: "$9.99/month"
  }
};

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      
      {/* BREADCRUMBS */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" href="/">Home</Link>
        <Typography color="text.primary">Account</Typography>
      </Breadcrumbs>

      {/* TOP PROFILE BANNER */}
      <Paper variant="outlined" sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ width: 72, height: 72, bgcolor: '#1976d2', fontSize: 24, fontWeight: 700 }}>
                {MOCK_USER.avatar}
              </Avatar>
              <Box>
                <Typography variant="h5" fontWeight={700}>{MOCK_USER.name}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{MOCK_USER.email}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  <Chip icon={<LocationIcon sx={{ fontSize: '14px !important' }} />} label={MOCK_USER.location} size="small" variant="outlined" />
                  <Chip icon={<CalendarIcon sx={{ fontSize: '14px !important' }} />} label={`Member since: ${MOCK_USER.memberSince}`} size="small" variant="outlined" />
                  <Chip icon={<PetsIcon sx={{ fontSize: '14px !important' }} />} label={`${MOCK_USER.dogs.length} Dogs registered`} size="small" variant="outlined" />
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
              <Chip label="Premium Member" color="secondary" icon={<StarIcon />} size="small" sx={{ fontWeight: 'bold' }} />
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" size="small" startIcon={<EditIcon />}>Edit Profile</Button>
                <Button variant="outlined" size="small" startIcon={<SettingsIcon />} color="inherit">Settings</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      {/* TABS NAVIGATION */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
          <Tab icon={<PetsIcon />} label="My Dogs" iconPosition="start" />
          <Tab icon={<DevicesIcon />} label="My Devices" iconPosition="start" />
          <Tab icon={<ReceiptLongIcon />} label="Orders" iconPosition="start" />
          <Tab icon={<CreditCardIcon />} label="Subscription" iconPosition="start" />
          <Tab icon={<ManageAccountsIcon />} label="Profile Settings" iconPosition="start" />
        </Tabs>
      </Box>

      {/* TAB CONTENT: MY DOGS */}
      {activeTab === 0 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Registered Dogs</Typography>
          {MOCK_USER.dogs.map((dog) => (
            <Card key={dog.id} variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} md={1}>
                    <Box sx={{ 
                      bgcolor: '#f0f4f8', 
                      borderRadius: 2, 
                      p: 2, 
                      textAlign: 'center', 
                      color: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      '& svg': { fontSize: 40 }
                    }}>
                      <PetsIcon />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="subtitle1" fontWeight={700}>{dog.name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {dog.breed} • {dog.age} • {dog.weight}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                      <Chip 
                        icon={<BluetoothConnectedIcon sx={{ fontSize: '14px !important' }} />} 
                        label={dog.device} 
                        size="small" 
                        color="primary" 
                        variant="outlined" 
                      />
                      <Chip 
                        label={dog.subscription} 
                        size="small" 
                        color={dog.subscription === "Premium" ? "secondary" : dog.subscription === "Standard" ? "primary" : "default"} 
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                    <Chip label={dog.deviceStatus} color={dog.deviceStatus === "Active" ? "success" : "warning"} size="small" sx={{ mb: 0.5 }} />
                    <Typography variant="caption" color="text.secondary" display="block">
                      Last sync: {dog.lastSync}
                    </Typography>
                    <Button size="small" variant="text" sx={{ mt: 1 }}>View Health Data</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
          <Button 
            fullWidth 
            variant="outlined" 
            startIcon={<AddIcon />} 
            sx={{ borderStyle: 'dashed', color: 'text.secondary', py: 1.5 }}
          >
            Add Another Dog
          </Button>
        </Box>
      )}

      {/* TAB CONTENT: MY DEVICES */}
      {activeTab === 1 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Registered Devices</Typography>
          {MOCK_USER.dogs.map((dog) => (
            <Card key={dog.id} variant="outlined" sx={{ mb: 2, borderRadius: 2 }}>
              <CardContent sx={{ display: 'flex', gap: 3 }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  bgcolor: 'rgba(0,0,0,0.04)', 
                  borderRadius: 2, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'text.secondary'
                }}>
                  <DevicesIcon fontSize="large" />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" fontWeight="bold">{dog.device}</Typography>
                  <Typography variant="caption" color="text.disabled" display="block" sx={{ mb: 2 }}>
                    SKU: {dog.deviceSku}
                  </Typography>
                  <List dense sx={{ p: 0 }}>
                    <ListItem sx={{ p: 0 }}><ListItemText primary="Owner" secondary={dog.name} /></ListItem>
                    <ListItem sx={{ p: 0 }}><ListItemText primary="Subscription Plan" secondary={dog.subscription} /></ListItem>
                    <ListItem sx={{ p: 0 }}><ListItemText primary="Device Status" secondary={dog.deviceStatus} /></ListItem>
                    <ListItem sx={{ p: 0 }}><ListItemText primary="Last Sync" secondary={dog.lastSync} /></ListItem>
                  </List>
                </Box>
                <Stack spacing={1} justifyContent="center">
                  <Button variant="outlined" size="small">Update Firmware</Button>
                  <Button variant="text" size="small">Replace Device</Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* TAB CONTENT: ORDERS */}
      {activeTab === 2 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Order History</Typography>
          {MOCK_USER.orders.map((order) => (
            <Paper key={order.id} variant="outlined" sx={{ p: 2, mb: 1.5, borderRadius: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" fontWeight={700}>{order.id}</Typography>
                  <Typography variant="caption" color="text.secondary" display="block">{order.date}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>{order.items.join(', ')}</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Typography variant="h6" fontWeight="bold">${order.total}</Typography>
                </Grid>
                <Grid item xs={6} md={3} sx={{ textAlign: 'right' }}>
                  <Chip 
                    label={order.status} 
                    size="small"
                    color={
                      order.status === "Delivered" ? "success" : 
                      order.status === "Shipped" ? "info" : 
                      order.status === "Processing" ? "warning" : "error"
                    }
                  />
                </Grid>
              </Grid>
            </Paper>
          ))}
          <Button variant="text" startIcon={<DownloadIcon />} sx={{ mt: 2 }}>
            Download all invoices
          </Button>
        </Box>
      )}

      {/* TAB CONTENT: SUBSCRIPTION */}
      {activeTab === 3 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Active Subscription</Typography>
          <Card variant="outlined" sx={{ p: 3, borderRadius: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Box>
                <Typography variant="h4" fontWeight={700} sx={{ color: '#6a1b9a' }}>
                  {MOCK_USER.subscription.plan}
                </Typography>
                <Chip label={MOCK_USER.subscription.status} color="success" size="small" sx={{ mt: 1 }} />
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h6" fontWeight="bold">{MOCK_USER.subscription.amount}</Typography>
                <Typography variant="caption" color="text.secondary">Next billing: {MOCK_USER.subscription.nextBilling}</Typography>
              </Box>
            </Box>
            
            <Box sx={{ mt: 4, mb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption" fontWeight="bold">Current Cycle</Typography>
                <Typography variant="caption">72% through</Typography>
              </Box>
              <LinearProgress variant="determinate" value={72} sx={{ height: 8, borderRadius: 4 }} />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                22 days remaining in current billing cycle
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Stack direction="row" spacing={2}>
              <Button variant="contained" color="secondary">Upgrade Plan</Button>
              <Button variant="outlined" color="error">Cancel Subscription</Button>
            </Stack>
          </Card>

          <Alert severity="warning" variant="outlined" sx={{ borderRadius: 2 }}>
            Cancelling your subscription will switch your device to Basic (free) features at the end of the billing period.
          </Alert>
        </Box>
      )}

      {/* TAB CONTENT: PROFILE SETTINGS */}
      {activeTab === 4 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Profile Settings</Typography>
          <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Full Name" defaultValue={MOCK_USER.name} variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  fullWidth 
                  label="Email" 
                  defaultValue={MOCK_USER.email} 
                  variant="outlined" 
                  disabled 
                  helperText="Contact support to change email"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone Number" defaultValue={MOCK_USER.phone} variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Location" defaultValue={MOCK_USER.location} variant="outlined" />
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} textAlign="left">
              <Typography variant="caption" fontWeight="bold" color="text.secondary">Notification Preferences</Typography>
            </Divider>

            <Stack spacing={1}>
              <FormControlLabel control={<Switch defaultChecked />} label="Email alerts for health anomalies" />
              <FormControlLabel control={<Switch defaultChecked />} label="SMS alerts for geo-fence breaches" />
              <FormControlLabel control={<Switch defaultChecked />} label="Monthly vet report delivery" />
              <FormControlLabel control={<Switch />} label="Product offers and updates" />
            </Stack>

            <Divider sx={{ my: 4 }} textAlign="left">
              <Typography variant="caption" fontWeight="bold" color="text.secondary">Security</Typography>
            </Divider>

            <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
              <Button variant="outlined" startIcon={<LockIcon />}>Change Password</Button>
              <Button variant="outlined" startIcon={<SecurityIcon />}>Enable Two-Factor Auth</Button>
            </Stack>

            <Button color="error" variant="text" startIcon={<LogoutIcon />}>Sign Out</Button>
          </Paper>
        </Box>
      )}

      {/* BOTTOM INFO */}
      <Alert severity="info" sx={{ mt: 4, borderRadius: 2 }}>
        This is a demo account page. Authentication and data persistence will be connected in a future release.
      </Alert>

    </Container>
  );
};

export default AccountPage;
