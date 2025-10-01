import yaml
import os
import sys

source_path = sys.argv[1]
# Get the GitHub workspace root (automatically set by GitHub Actions)
workspace = os.environ.get("GITHUB_WORKSPACE","")

# Build the full path to the jenkins.yaml file
path_to_file=os.path.join(workspace,source_path)
yaml_path = os.path.join(path_to_file, "jenkins.yaml")
print(f"jenkins.yaml file path is {yaml_path}")
# Load YAML file
with open(yaml_path, "r") as f:
    config = yaml.safe_load(f)

run_number = os.environ.get("GITHUB_RUN_NUMBER", "0")
ref_name = os.environ.get("GITHUB_REF_NAME", "unknown")
sha = "nonMain" if ref_name == "main" else os.environ.get("GITHUB_SHA", "")[:7]

# Example: Custom keys for env vars
env_vars = {
    "MajorVersion": config["version"]["major"],
    "MinorVersion": config["version"]["minor"],
    "PatchNumber": config["version"]["patch"],
    "ENABLE_UNIT_TEST": config['enableUnitTest'],
    "BUILDCMD": config['buildcmd'],
    "BUILDFILEPATH": config['buildfilepath'],
    "BLACKDUCK_PROJECT": config['blackduck_project'][0],
    "BLACKDUCK_SCAN": config['blackduckscan'],
    "SIGNING_FILTER": config['signing']['signingIncludeFilter'],
    "CODE_COVERAGE_FILE": config['language']['codeCoverageFile'],
    "SIGNING_EXCLUDE_FILTER": config['signing']['signingExcludeFilter'],
    "BranchName": ref_name,
    "BuildNum": run_number,
    "sha": sha,
    "SKIP_UNIT_TESTS": config['testing']['skipUnitTests']
}

# Set and persist environment variables
with open(os.environ["GITHUB_ENV"], "a") as env_file:
    for key, value in env_vars.items():
        os.environ[key] = str(value)
        env_file.write(f"{key}={value}\n")

# You can now use the env vars immediately
version=f"{env_vars['MajorVersion']}.{env_vars['MinorVersion']}.{env_vars['BuildNum']}.{env_vars['PatchNumber']}"
print(f'Version is {version}')
print(f"Branch name is {env_vars['BranchName']}")
print(f"SHA is {env_vars['sha']}")