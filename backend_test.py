#!/usr/bin/env python3
"""
Backend API Test Suite for Tapish Vais Portfolio
Tests all API endpoints defined in /app/app/api/[[...path]]/route.js
"""

import requests
import json
import os
from datetime import datetime

# Load base URL from environment
BASE_URL = "https://react-native-studio-1.preview.emergentagent.com"
API_BASE = f"{BASE_URL}/api"

print("=" * 80)
print("BACKEND API TEST SUITE")
print("=" * 80)
print(f"Base URL: {BASE_URL}")
print(f"API Base: {API_BASE}")
print(f"Test started at: {datetime.now().isoformat()}")
print("=" * 80)

# Track test results
test_results = {
    "passed": 0,
    "failed": 0,
    "tests": []
}

def log_test(name, passed, details=""):
    """Log test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"\n{status}: {name}")
    if details:
        print(f"  Details: {details}")
    test_results["tests"].append({"name": name, "passed": passed, "details": details})
    if passed:
        test_results["passed"] += 1
    else:
        test_results["failed"] += 1

# Test 1: GET /api/ - Root endpoint
print("\n" + "=" * 80)
print("TEST 1: GET /api/ - Root endpoint")
print("=" * 80)
try:
    response = requests.get(f"{API_BASE}/", timeout=10)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 200:
        data = response.json()
        if data.get("ok") == True and data.get("name") == "Tapish Vais Portfolio API":
            log_test("GET /api/ returns correct response", True, f"Response: {data}")
        else:
            log_test("GET /api/ returns correct response", False, f"Missing required fields. Got: {data}")
    else:
        log_test("GET /api/ returns 200", False, f"Got status {response.status_code}")
except Exception as e:
    log_test("GET /api/ endpoint", False, f"Exception: {str(e)}")

# Test 2: GET /api/health - Health check
print("\n" + "=" * 80)
print("TEST 2: GET /api/health - Health check")
print("=" * 80)
try:
    response = requests.get(f"{API_BASE}/health", timeout=10)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 200:
        data = response.json()
        if data.get("status") == "ok":
            log_test("GET /api/health returns correct response", True, f"Response: {data}")
        else:
            log_test("GET /api/health returns correct response", False, f"Expected status='ok', got: {data}")
    else:
        log_test("GET /api/health returns 200", False, f"Got status {response.status_code}")
except Exception as e:
    log_test("GET /api/health endpoint", False, f"Exception: {str(e)}")

# Test 3: POST /api/contact - Valid contact submission
print("\n" + "=" * 80)
print("TEST 3: POST /api/contact - Valid contact submission")
print("=" * 80)
try:
    contact_data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "message": "This is a test message for the portfolio contact form. Testing the API functionality."
    }
    response = requests.post(
        f"{API_BASE}/contact",
        json=contact_data,
        headers={"Content-Type": "application/json"},
        timeout=10
    )
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 201:
        data = response.json()
        if data.get("ok") == True and "id" in data:
            log_test("POST /api/contact with valid data", True, f"Created contact with ID: {data.get('id')}")
            # Store the ID for potential future tests
            created_contact_id = data.get("id")
        else:
            log_test("POST /api/contact with valid data", False, f"Missing required fields in response. Got: {data}")
    else:
        log_test("POST /api/contact returns 201", False, f"Got status {response.status_code}, response: {response.text}")
except Exception as e:
    log_test("POST /api/contact with valid data", False, f"Exception: {str(e)}")

# Test 4: POST /api/contact - Missing name field
print("\n" + "=" * 80)
print("TEST 4: POST /api/contact - Missing name field (validation)")
print("=" * 80)
try:
    contact_data = {
        "email": "test@example.com",
        "message": "Missing name field"
    }
    response = requests.post(
        f"{API_BASE}/contact",
        json=contact_data,
        headers={"Content-Type": "application/json"},
        timeout=10
    )
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 400:
        data = response.json()
        if "error" in data:
            log_test("POST /api/contact missing name returns 400", True, f"Error message: {data.get('error')}")
        else:
            log_test("POST /api/contact missing name returns 400", False, f"Missing error field in response. Got: {data}")
    else:
        log_test("POST /api/contact missing name validation", False, f"Expected 400, got {response.status_code}")
except Exception as e:
    log_test("POST /api/contact missing name validation", False, f"Exception: {str(e)}")

# Test 5: POST /api/contact - Missing email field
print("\n" + "=" * 80)
print("TEST 5: POST /api/contact - Missing email field (validation)")
print("=" * 80)
try:
    contact_data = {
        "name": "Jane Smith",
        "message": "Missing email field"
    }
    response = requests.post(
        f"{API_BASE}/contact",
        json=contact_data,
        headers={"Content-Type": "application/json"},
        timeout=10
    )
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 400:
        data = response.json()
        if "error" in data:
            log_test("POST /api/contact missing email returns 400", True, f"Error message: {data.get('error')}")
        else:
            log_test("POST /api/contact missing email returns 400", False, f"Missing error field in response. Got: {data}")
    else:
        log_test("POST /api/contact missing email validation", False, f"Expected 400, got {response.status_code}")
except Exception as e:
    log_test("POST /api/contact missing email validation", False, f"Exception: {str(e)}")

# Test 6: POST /api/contact - Missing message field
print("\n" + "=" * 80)
print("TEST 6: POST /api/contact - Missing message field (validation)")
print("=" * 80)
try:
    contact_data = {
        "name": "Bob Johnson",
        "email": "bob@example.com"
    }
    response = requests.post(
        f"{API_BASE}/contact",
        json=contact_data,
        headers={"Content-Type": "application/json"},
        timeout=10
    )
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 400:
        data = response.json()
        if "error" in data:
            log_test("POST /api/contact missing message returns 400", True, f"Error message: {data.get('error')}")
        else:
            log_test("POST /api/contact missing message returns 400", False, f"Missing error field in response. Got: {data}")
    else:
        log_test("POST /api/contact missing message validation", False, f"Expected 400, got {response.status_code}")
except Exception as e:
    log_test("POST /api/contact missing message validation", False, f"Exception: {str(e)}")

# Test 7: POST /api/contact - Invalid email format
print("\n" + "=" * 80)
print("TEST 7: POST /api/contact - Invalid email format (validation)")
print("=" * 80)
try:
    contact_data = {
        "name": "Invalid Email User",
        "email": "not-an-email",
        "message": "Testing invalid email validation"
    }
    response = requests.post(
        f"{API_BASE}/contact",
        json=contact_data,
        headers={"Content-Type": "application/json"},
        timeout=10
    )
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 400:
        data = response.json()
        if "error" in data:
            log_test("POST /api/contact invalid email returns 400", True, f"Error message: {data.get('error')}")
        else:
            log_test("POST /api/contact invalid email returns 400", False, f"Missing error field in response. Got: {data}")
    else:
        log_test("POST /api/contact invalid email validation", False, f"Expected 400, got {response.status_code}")
except Exception as e:
    log_test("POST /api/contact invalid email validation", False, f"Exception: {str(e)}")

# Test 8: GET /api/contact - List contacts
print("\n" + "=" * 80)
print("TEST 8: GET /api/contact - List contacts")
print("=" * 80)
try:
    response = requests.get(f"{API_BASE}/contact", timeout=10)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text[:500]}...")  # Truncate long responses
    
    if response.status_code == 200:
        data = response.json()
        if "items" in data and isinstance(data["items"], list):
            # Check that items don't have _id field (MongoDB ObjectId should not leak)
            has_object_id = False
            for item in data["items"]:
                if "_id" in item:
                    has_object_id = True
                    break
            
            if has_object_id:
                log_test("GET /api/contact returns items without _id", False, "Found _id field in response items")
            else:
                # Check that items have required fields
                if len(data["items"]) > 0:
                    first_item = data["items"][0]
                    required_fields = ["id", "name", "email", "message", "createdAt"]
                    missing_fields = [f for f in required_fields if f not in first_item]
                    if missing_fields:
                        log_test("GET /api/contact returns correct structure", False, f"Missing fields: {missing_fields}")
                    else:
                        log_test("GET /api/contact returns correct structure", True, f"Found {len(data['items'])} contacts with correct fields")
                else:
                    log_test("GET /api/contact returns items array", True, "Empty items array (no contacts yet)")
        else:
            log_test("GET /api/contact returns items array", False, f"Missing or invalid 'items' field. Got: {data}")
    else:
        log_test("GET /api/contact returns 200", False, f"Got status {response.status_code}")
except Exception as e:
    log_test("GET /api/contact endpoint", False, f"Exception: {str(e)}")

# Test 9: GET /api/foo/bar - Unknown route (404)
print("\n" + "=" * 80)
print("TEST 9: GET /api/foo/bar - Unknown route (should return 404)")
print("=" * 80)
try:
    response = requests.get(f"{API_BASE}/foo/bar", timeout=10)
    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")
    
    if response.status_code == 404:
        log_test("GET /api/foo/bar returns 404", True, "Unknown route correctly returns 404")
    else:
        log_test("GET /api/foo/bar returns 404", False, f"Expected 404, got {response.status_code}")
except Exception as e:
    log_test("GET /api/foo/bar returns 404", False, f"Exception: {str(e)}")

# Print summary
print("\n" + "=" * 80)
print("TEST SUMMARY")
print("=" * 80)
print(f"Total Tests: {test_results['passed'] + test_results['failed']}")
print(f"Passed: {test_results['passed']}")
print(f"Failed: {test_results['failed']}")
print(f"Success Rate: {(test_results['passed'] / (test_results['passed'] + test_results['failed']) * 100):.1f}%")
print("=" * 80)

# Print failed tests if any
if test_results['failed'] > 0:
    print("\nFAILED TESTS:")
    for test in test_results['tests']:
        if not test['passed']:
            print(f"  ❌ {test['name']}")
            if test['details']:
                print(f"     {test['details']}")

print("\nTest completed at:", datetime.now().isoformat())
print("=" * 80)
